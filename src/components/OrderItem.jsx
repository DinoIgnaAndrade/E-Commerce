import { Pressable, StyleSheet, Text, View } from 'react-native'
import Card from './Card';


const OrderItem = ({order, total}) => {
  return (
    <Card styles={styles.container}>
        <View>
            <Text>
                creada el {new Date(order.createdAt).toLocaleString()}
            </Text>
            <Text>Total: ${total}</Text>
        </View>
        <Pressable>

        </Pressable>
    </Card>
  )
}

export default OrderItem;

const styles = StyleSheet.create({

})