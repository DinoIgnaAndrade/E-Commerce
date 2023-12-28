import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from '../components/Header';
import OrdersScreen from "../screens/OrdersScreen";
import { colors } from '../global/colorPalette';

const Stack = createNativeStackNavigator();

const OrdersNavigators = () => {
    return (
        <Stack.Navigator
            initialRouteName="Carrito"
            screenOptions={
                ({ route, navigation }) => ({
                    header: () => <Header
                        title={route.name}
                        color={colors.lightBlue}
                        route={route}
                        navigation={navigation} />
                })
            }
        >
            <Stack.Screen
                name='Ordenes'
                component={OrdersScreen}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigators;