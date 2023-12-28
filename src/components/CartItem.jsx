import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';
import { Colors } from '../global/colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons/faSquareMinus';


const CartItem = ({ item }) => {
    return (
        <Card styles={styles.cartItemContainer}>
            <Image
                style={styles.imageCartContainer}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <View>
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
    cartItemContainer: {
        flex:1,
        flexDirection:'row'
    },
    imageCartContainer: {

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

    },

})