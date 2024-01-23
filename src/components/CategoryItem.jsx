import { Text, StyleSheet, Pressable } from "react-native";
import { colors } from '../global/colorPalette';
import Card from './Card';
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shopSlice";


const CategoryItem = ({
    
        category, 
        navigation

    }) => {

        const dispatch = useDispatch();

    return (
        <Pressable onPress={()=>{
            navigation.navigate('Productos')
            dispatch(setCategorySelected(category))
            }
            }>
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