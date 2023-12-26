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
                    onPress={() => null}>
                    <Text style={styles.textButtom}>Comprar</Text>
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