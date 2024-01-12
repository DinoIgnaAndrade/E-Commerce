import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from '../components/Header';
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";


import { colors } from '../global/colorPalette';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
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
                name='Signup'
                component={SignupScreen}
            />

            <Stack.Screen
                name='Login'
                component={LoginScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator;