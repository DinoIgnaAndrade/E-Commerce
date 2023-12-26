import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../global/colorPalette';

import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';

import categories_data from '../data/categories_data.json';


const CategoriesScreen = (
    {
        navigation
    }
) => {

    const renderCategoryItem = ({ item }) => (
        <CategoryItem
            category={item}
            navigation={navigation}
            color={colors.gold} />
    )


    return (
        <View style={styles.container}>
            <FlatList
                data={categories_data}
                renderItem={renderCategoryItem}
                keyExtractor={item => item}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.grey,
    },
    listContainer:{
        flexGrow:1,
        marginBottom:60,
    }
})

            {/* <Header
                styles={styles.header}
                title="Categorías"
                color={colors.darkBlue} /> */}