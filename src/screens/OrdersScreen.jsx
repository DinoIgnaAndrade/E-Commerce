import { FlatList, Modal, StyleSheet, Text, View, Pressable, Buttom } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import OrderItem from '../components/OrderItem';
import { colors } from '../global/colorPalette';
import { useGetOrdersQuery } from '../services/shopServices';

const OrdersScreen = () => {

    const localId = useSelector(state => state.authReducer.localId)
    const { data, isLoading, error, refetch } = useGetOrdersQuery(localId)
    const [orderData, setOrderData] = useState([]);
    const [orderIdSelected, setOrderIdSelected] = useState("");
    const [orderSelected, setOrderSelected] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (data) {
            const orData = Object.values(data)
            setOrderData(orData);
        }
    }, [data, isLoading])

    useEffect(() => {
        const orderSelected = orderData.find(order => order.orderId === orderIdSelected)
        setOrderSelected(orderSelected)
    }, [orderIdSelected])

    const renderOrderItem = ({ item }) => {
        return (
            <OrderItem order={item} setOrderId={setOrderIdSelected} setModalVisible={setModalVisible} />
        )
    }

    const renderModalItem = ({ item }) => {
        return (
            <Text>{item.brand} - ${item.price}</Text>
        )
    }

    const handleRefresh = async () => {
        try {
            await refetch();
        } catch (error) {
            console.error('Error al recargar los datos:', error);
        }
    };

    return (
        <>
            <Pressable onPress={handleRefresh}>
                <Text>Actualizar</Text>
            </Pressable>

            <FlatList
                data={orderData}
                renderItem={renderOrderItem}
            />

            <Modal visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FlatList
                            data={orderSelected?.cartItem}
                            renderItem={renderModalItem}
                        />
                        <Text style={styles.modalText}>Total: ${orderSelected?.total}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default OrdersScreen;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});