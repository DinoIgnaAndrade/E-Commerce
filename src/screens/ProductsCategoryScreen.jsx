import { View, Text, StyleSheet, FlatList } from 'react-native';

import products_data from '../data/products_data.json';

import ProductItem from '../components/ProductItem';
import Header  from '../components/Header';
import { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';

import {colors} from '../global/colorPalette';

const ProductsCategoryScreen = ({category,onSelectCategoryEvent}) => {

  const [productsByCastegory, setProductsByCastegory] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product=>product.category===category)

    const searchFiltered = productsFilteredByCategory.filter(
      product=>product.title.toLowerCase().includes(
        search.toLowerCase()))

    setProductsByCastegory(searchFiltered)

  }, [category, search])
  

  const renderProducts = ({ item }) => (
    <ProductItem item={item} />
  )

  const onSearch = (search)  => {
    setSearch(search);
  }

  return (
    <View style={styles.container}>
      <Header 
        title={'Productos'}
        color={colors.orange}
        category={category}
        onSelectCategoryEvent={onSelectCategoryEvent}/>
      <SearchInput onSearchHandlerEvent={onSearch}/>
      <FlatList
        data={productsByCastegory}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ProductsCategoryScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'auto',
  }
})