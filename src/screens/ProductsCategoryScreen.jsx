import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

import products_data from '../data/products_data.json';
import { colors } from '../global/colorPalette';

import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';



const ProductsCategoryScreen = (
  {
    navigation,
    route
  }
) => {

  const [productsByCastegory, setProductsByCastegory] = useState([]);
  const [search, setSearch] = useState('');

  const { category } = route.params;

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category === category)

    const searchFiltered = productsFilteredByCategory.filter(
      product => product.title.toLowerCase().includes(
        search.toLowerCase()))

    setProductsByCastegory(searchFiltered)

  }, [category, search])


  const renderProducts = ({ item }) => (
    <ProductItem item={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search);
  }

  return (
    <>
      {
        productsByCastegory
          ?
          <View style={styles.container}>
            {/* <Header
        title={'Productos'}
        color={colors.orange}
        category={category} /> */}
            <SearchInput onSearchHandlerEvent={onSearch} />
            <FlatList
              data={productsByCastegory}
              renderItem={renderProducts}
              keyExtractor={item => item.id}
            />
          </View>
          :
          <ActivityIndicator />
      }
    </>
  )
}

export default ProductsCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 'auto',
  }
})