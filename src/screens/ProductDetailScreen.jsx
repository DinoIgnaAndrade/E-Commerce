import { View, Text, StyleSheet, ActivityIndicator, Pressable, Image, ScrollView } from 'react-native';
import products from '../data/products_data.json';
import { useEffect, useState } from 'react';

import Header from '../components/Header';

import { colors } from '../global/colorPalette';

const ProductDetailScreen = ({ route }) => {

  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const productId = route.params;

  console.log(productId);

  useEffect(() => {
    const productFinder = products.find(product => product.id === productId);
    setProductSelected(productFinder);
    setIsLoading(false);

  }, [productId])


  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <>
            {/* <Header 
              title='Detalles'
              color={colors.lightBlue} /> */}
            <ScrollView>
              <Image
                source={{ uri: productSelected.images[0] }}
                resizeMode='cover'
              />
              <View style={styles.container}>
                <Text>{productSelected.title}</Text>
                <Text>{productSelected.description}</Text>
                <Text>{productSelected.price}</Text>
                <Pressable onPress={() => null}>
                  <Text>Comprar</Text>
                </Pressable>
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
  }
})