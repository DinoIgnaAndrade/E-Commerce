import { View, Text, StyleSheet, FlatList } from 'react-native';
import {colors} from '../global/colorPalette';

import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';

import categories_data from '../data/categories_data.json';


const CategoriesScreen = ({onSelectCategoryEvent}) => {

    const renderCategoryItem = ({ item }) => (
        <CategoryItem 
            category={item}
            onSelectCategoryEvent={onSelectCategoryEvent}
            color={colors.gold} />
    )

    return (
        <View style={styles.container}>
            <Header
            styles={styles.header} 
            title="Categorías"
            color={colors.darkBlue} />
            <FlatList
                data={categories_data}
                renderItem={renderCategoryItem}
                keyExtractor={item => item}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:colors.white,
    },
})