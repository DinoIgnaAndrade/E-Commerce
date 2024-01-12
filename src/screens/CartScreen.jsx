import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';

import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopServices';

const CartScreen = () => {

  const cartItem = useSelector(state => state.cartReducer.items);
  const total = useSelector(state => state.cartReducer.total);
  const [ triggerPost, result ] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({total, cartItem, user:"LoggedUser"})
  }

  const renderCartItem = ({item}) => (
    <CartItem item={item}/>
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItem}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
         />
         <View style={styles.confirm}>
            <Text style={styles.total}>Total: ${total}</Text>
            <Pressable style={styles.buttom} onPress={confirmCart}>
              <Text style={styles.textButtom}>Confirmar</Text>
            </Pressable>
         </View>
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {

  },
})