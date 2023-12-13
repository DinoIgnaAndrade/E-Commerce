import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from '../global/colorPalette';
import Card from './Card';

const CategoryItem = ({

        category, 
        onSelectCategoryEvent 
    
    }) => {

    return (

        <TouchableOpacity onPress={()=>onSelectCategoryEvent(category)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>

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