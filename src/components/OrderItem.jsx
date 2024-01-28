import { Pressable, StyleSheet, Text, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Card from './Card';
import { colors } from '../global/colorPalette';

const OrderItem = ({

  order, 
  setOrderId, 
  setModalVisible

}) => {

  let date = new Date(order.createdAt);
  date = date.toLocaleString();

  return (
    <Card style={styles.container}>
      <View>
        <Text style={styles.createdAt}>
          creada el { date  }
        </Text>
        <Text>Total: ${order.total}</Text>
      </View>
      <Pressable onPress={()=>{
        setOrderId(order.orderId)
        setModalVisible(true)
      }}
      style={styles.searchIcon}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={30}
          color={'green'}
        />
      </Pressable>
    </Card>
  )
}

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 5,
    borderRadius: 30,
    backgroundColor: colors.middleBlue
  },
  createdAt: {
    marginBottom: 5,
  },
  searchIcon:{
    marginLeft: 'auto',
  }
})