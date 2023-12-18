import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//vistas
import CategoriesScreem from '../screens/CategoriesScreen';
import ProductsCategoryScreen from '../screens/ProductsCategoryScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import Header from '../components/Header';
import { StyleSheet } from "react-native";
import { colors } from "../global/colorPalette";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categorias"
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
                    name='Categorias'
                    component={CategoriesScreem}
                />
                <Stack.Screen
                    name='Productos'
                    component={ProductsCategoryScreen}
                />
                <Stack.Screen
                    name='Detalles'
                    component={ProductDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})