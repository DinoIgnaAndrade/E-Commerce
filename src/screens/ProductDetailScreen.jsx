import { View, Text, StyleSheet} from 'react-native';

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Detalles de Productos</Text>
    </View>
  )
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})