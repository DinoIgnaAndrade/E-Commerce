import { View, Text, StyleSheet, FlatList } from 'react-native';

import { colors } from '../global/colorPalette';
import CategoryItem from '../components/CategoryItem';
import { useGetCategoriesQuery, useGetProductsQuery } from '../services/shopServices';


const CategoriesScreen = (
    {
        navigation

    }) => {

    const {data, isLoading, error} = useGetCategoriesQuery();

    const renderCategoryItem = ({ item }) => (
        <CategoryItem
            category={item}
            navigation={navigation}
            color={colors.gold} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
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
        flex: 1,
        backgroundColor: colors.grey,
    },
    listContainer: {
        flexGrow: 1,
        paddingBottom:60,
    }
})
