import { View, Text, StyleSheet, ActivityIndicator, Pressable, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../features/cartSlice';
import { setProductSelected } from '../features/shopSlice';
import { colors } from '../global/colorPalette';;

const ProductDetailScreen = ({ route }) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const productId = route.params;
  const productSelected = useSelector(state=>state.shopReducer.productSelected)

  useEffect(() => {
    dispatch(setProductSelected(productId));
    setIsLoading(false);
  }, [productId])

  const onAddToCart = () => {
    dispatch(addItem({...productSelected, quantity: 1}));
  }


  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <>

            <ScrollView style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: productSelected.images[0] }}
                resizeMode='cover'
              />
              <View
                style={styles.container}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>

                <View styles={styles.buttomContainer}>

                  <Text style={styles.price}>{productSelected.price}$</Text>

                  <Pressable
                    style={styles.buttom}
                    onPress={onAddToCart}>
                    <Text style={styles.textButtom}>Agregar</Text>
                  </Pressable>

                </View>

              </View>
            </ScrollView>
          </>
      }

    </>
  )
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: colors.grey,
  },
  image: {
    padding: 10,
    height: '200%',
    width: '100%',
  },
  title: {
    fontSize: 30,
    margin: 10,
    backgroundColor: colors.middleBlue,
    borderRadius: 25,
    textAlign: 'center',
  },
  description: {
    fontSize: 22,
    margin: 5,
  },
  buttomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  price: {
    flex: 1,
    textAlign: 'center',
    margin: 5,
    marginHorizontal: 150,
    fontSize: 18,


  },
  buttom: {
    flex: 1,
    paddingBottom:30,
    marginBottom:50
  },
  textButtom: {
    textAlign: 'center',
    backgroundColor: colors.orange,
    borderRadius: 30,
    marginHorizontal: 130,
    fontSize: 18,
    minWidth: 30,
  },
})