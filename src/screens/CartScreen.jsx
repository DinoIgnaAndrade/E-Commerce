import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';

import CartItem from '../components/CartItem';
import cart_data from '../data/cart_data.json';

const CartScreen = () => {

  const [total, setTotal] = useState();

  useEffect(() => {
    const total = cart_data.reduce((accumulator, currentItem) =>(
      accumulator += currentItem.price * currentItem.quantity
    ), 0)
    setTotal(total)
  }, [])
  

  const renderCartItem = ({item}) => (
    <CartItem item={item}/>
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
         />
         <View style={styles.confirm}>
            <Text style={styles.total}>Total: ${total}</Text>
            <Pressable style={styles.buttom} onPress={null}>
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