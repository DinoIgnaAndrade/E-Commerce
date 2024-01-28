import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import { colors } from '../global/colorPalette';
import { usePostOrderMutation } from '../services/shopServices';

const CartScreen = () => {

  const cartItem = useSelector(state => state.cartReducer.items);
  const total = useSelector(state => state.cartReducer.total);

  const user = useSelector(state => state.authReducer.user);
  const localId = useSelector(state => state.authReducer.localId)

  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({ 
      user, 
      localId:localId, 
      cartItem, 
      total, 
      createdAt: Date.now(),
      orderId: Math.ceil(Math.random(1,10)*1000) 
    })
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
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
    flex: 1,
  },
  confirm: {
    marginBottom: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  total: {
    fontSize: 16,
    fontFamily: 'Josefin-Bold'
  },
  buttom: {
    backgroundColor: colors.middleBlue,
    padding:10,
    borderRadius:10,
  },
  textButtom:{
    fontFamily:'Josefin-Bold',
    fontSize:16,
    color: '#fff'
  }
})