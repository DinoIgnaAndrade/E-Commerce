import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../global/colorPalette';

const ProductItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: item.images[0] }}
        />
    </TouchableOpacity>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:30,
        padding:10,
        margin:5,

        backgroundColor:colors.middleBlue,
    },
    title:{
      fontSize:30,
    },
    image:{
        borderRadius:30,
        padding:10,
        width:100,
        height:100,
    },
})