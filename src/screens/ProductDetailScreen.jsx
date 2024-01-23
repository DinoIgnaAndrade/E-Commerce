import { View, Text, StyleSheet, ActivityIndicator, Pressable, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../features/cartSlice';
import { setProductSelected } from '../features/shopSlice';
import { colors } from '../global/colorPalette';
import { useGetProductsByCategoryQuery } from '../services/shopServices';
import Carrousel from '../components/Carrousel';


const ProductDetailScreen = () => {

  const dispatch = useDispatch();
  
  const category = useSelector(state => state.shopReducer.categorySelected)
  const id = useSelector(state => state.shopReducer.productIdSelected)
  const { data: products, isLoading, error } = useGetProductsByCategoryQuery(category);

  const productsArray = Object.values(products);
  const searchId = productsArray.find(product => product.id == id);
  dispatch(setProductSelected(searchId))

  const productSelected = useSelector(state => state.shopReducer.productSelected)

  const onAddToCart = () => {
    dispatch(addItem({ ...productSelected, quantity: 1 }));
  }

  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <ScrollView>
            {/* <Image
              source={{ uri: productSelected.images[0] }}
              style={styles.image}
              resizeMode='cover'
            /> */}
            <Carrousel />
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

      }

    </>
  )
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    minWidth: 300,
    width: '100%',
    height: 400,
  },
  container: {
    flex:1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Josefin-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'Josefin-Regular',
    fontSize: 20,
  },
  buttomContainer: {

  },
  price: {
    fontFamily: 'Josefin-Bold',
    alignSelf:'center',
    fontSize: 32,
    color: colors.orange
  },
  buttom: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  textButtom: {
    color: '#fff',
  },
})