import { Text, StyleSheet, Pressable } from "react-native";
import { colors } from '../global/colorPalette';
import Card from './Card';

const CategoryItem = ({
        category, 
        navigation
    }) => {

    return (
        <Pressable onPress={()=>navigation.navigate('Productos', {category})}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.orange,
        borderRadius: 30,
        padding: 20,
        margin: 5,
    },
    text: {
        fontFamily:'Josefin-Regular',
        fontSize:20,
        color:'white',
    }
})