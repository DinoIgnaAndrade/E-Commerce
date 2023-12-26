import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from '../components/Header';
import CartScreen from "../screens/CartScreen";

import { colors } from '../global/colorPalette';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="Carrito"
                screenOptions={
                    ({route, navigation}) => ({
                        header: () => <Header 
                                        title={route.name}
                                        color={colors.lightBlue}
                                        route={route} 
                                        navigation={navigation}/>
                    })
                }
            >
                <Stack.Screen
                    name='Carrito'
                    component={CartScreen}
                />
            </Stack.Navigator>
    )
}

export default CartNavigator;