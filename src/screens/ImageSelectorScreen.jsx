import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { colors } from '../global/colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePicture } from '../features/authSlice';
import { usePutProfilePictureMutation } from '../services/shopServices';

const ImageSelectorScreen = ({navigation}) => {

  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const localId = useSelector(state => state.authReducer.localId)
  const [triggerSaverPicture, result] = usePutProfilePictureMutation()

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted){
      return false
    }
    console.log('permisos otorgados')
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect: [1,1],
        base64: true,
        quality:0.2
      })
      if(!result.canceled){
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }else{
      console.log("La app no tiene los permisos")
    }
  }



  const confirmImage = () => {
    dispatch(setProfilePicture(image))
    triggerSaverPicture({image, localId})
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      {
        image
          ?
          <View style={styles.imageContainer}>

            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />

            <Pressable style={styles.btn} onPress={pickImage}>
              <Text style={styles.textBtn}>Take Picture</Text>
            </Pressable>

            <Pressable style={{ ...styles.btn, ...styles.btnConfirm }} onPress={confirmImage}>
              <Text style={styles.textBtn}>Confirm</Text>
            </Pressable>
          </View>
          :
          <View style={styles.noImageContainer}>
            <FontAwesomeIcon
              icon={faImage}
              color={colors.white}
              size={200} />
            <Pressable style={styles.btn} onPress={pickImage}>
              <Text style={styles.textBtn}>Open Camera</Text>
            </Pressable>
          </View>
      }

    </View>
  )
}

export default ImageSelectorScreen

const styles = StyleSheet.create({
  noImageContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: colors.middleBlue,
    borderRadius: 80,
  },
  btn: {
    backgroundColor: colors.orange,
    padding: 20,
    borderRadius: 50,
    marginTop: 50,
  },
  textBtn: {
    fontSize: 20,
    color: '#fff'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  btnConfirm: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 50
  }
})