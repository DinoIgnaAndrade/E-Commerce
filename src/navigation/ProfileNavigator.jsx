import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from '../components/Header';
import ProfileScreen from '../screens/ProfileScreen';

import { colors } from '../global/colorPalette';
import ImageSelectorScreen from "../screens/ImageSelectorScreen";



const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
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
                name='Profile'
                component={ProfileScreen}
            />
            <Stack.Screen
                name='imageSelector'
                component={ImageSelectorScreen}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;