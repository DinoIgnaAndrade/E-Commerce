import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrderItem from '../components/OrderItem';

import orders_data from '../data/orders_data.json';
import cart_data from '../data/cart_data.json';

import { colors } from '../global/colorPalette';

const OrdersScreen = () => {

    const renderOrderItem = ({ item }) => {
        const total = cart_data.reduce((accumulator, currentItem) => (
            accumulator += currentItem.price * currentItem.quantity
        ), 0)
        return (
            <OrderItem order={item} total={total} />
        )
    }

    return (
        <FlatList
            data={orders_data}
            renderItem={renderOrderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default OrdersScreen;

const styles = StyleSheet.create({
    
})