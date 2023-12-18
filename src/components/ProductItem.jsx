import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { colors } from '../global/colorPalette';

const ProductItem = ({ item, navigation }) => {

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Detalles',item.id)}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: item.images[0] }}
      />
    </Pressable>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    padding: 5,
    margin: 5,

    backgroundColor: colors.orange,
    shadowColor: colors.black,
    shadowOffset: {
        height: 10,
        width: 10,
    },
    elevation: 5,
    shadowOpacity: 50, 
    shadowRadius: 20
  },
  title: {
    fontSize: 24,
  },
  image: {
    borderRadius: 30,
    padding: 10,
    width: 50,
    height: 50,
  },
})