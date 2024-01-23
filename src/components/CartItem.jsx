import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';
import { Colors, colors } from '../global/colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons/faSquareMinus';


const CartItem = ({ item }) => {
    return (
        <Card style={styles.container} >
            <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.total}>
                    Cantidad: {item.quantity}, Total: ${item.price * item.quantity}
                </Text>
            </View>
            <Pressable style={styles.buttom} onPress={null}>
                <FontAwesomeIcon
                    icon={faSquareMinus}
                    color=''
                    size={20} />
            </Pressable>
        </Card>
    )
}

export default CartItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
  
    },
    imageCartItem: {
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius:10,
    },
    infoContainer: {
    },
    title: {
    },
    brand: {
    },
    price: {
    },
    total: {
    },
    buttom: {
        marginLeft: 'auto',
    },

})