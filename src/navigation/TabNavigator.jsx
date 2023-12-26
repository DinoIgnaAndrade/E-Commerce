import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from '../global/colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}>
                <Tab.Screen
                    name='ShopStack'
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: () => (<FontAwesomeIcon
                            icon={faList}
                            color={colors.lightBlue}
                            size={25} />),
                    }} />
                <Tab.Screen
                    name='CartScreen'
                    component={CartNavigator}
                    options={{
                        tabBarIcon: () => (<FontAwesomeIcon 
                            icon={faCartShopping} 
                            color={colors.orange} 
                            size={25}/>),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.darkBlue,
        shadowColor: '#ccc',
        elevation: 1,
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 50,
    }
})