import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import { maps_api_key } from '../apis/googleCloud'

const MapPreview = ({ location }) => {
    return (
        <View style={styles.mapPreview}>
            <Image
                style={styles.mapImage}
                source={{uri:
                `https://maps.googleapis.com/maps/api/staticmap?zoom=10&size=300x300&maptype=roadmap&markers=color:red%7Clabel=I%7C${location.latitude},${location.longitude}&key=${maps_api_key}`
            }}
            />
        </View>
    )
}

export default MapPreview

const styles = StyleSheet.create({
    mapPreview:{
        justifyContent:'center',
        alignItems:'center'
    },
    mapImage:{
        width:Dimensions.get('window').width,
        height: 300
    }
})