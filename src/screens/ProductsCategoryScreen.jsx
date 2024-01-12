import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchInput from '../components/SearchInput';
import ProductItem from '../components/ProductItem';
import { useGetProductsByCategoryQuery } from '../services/shopServices';

const ProductsCategoryScreen = (
  {
    navigation,
    route
  }
) => {

  const [productsByCastegory, setProductsByCastegory] = useState([]);
  const [search, setSearch] = useState('');
  const category = useSelector(state => state.shopReducer.categorySelected)


  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category);


  useEffect(() => {
    if (!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory)
      const searchFiltered = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCastegory(searchFiltered)
    }

  }, [isLoading,category, search])

  const renderProducts = ({ item }) => (
    <ProductItem item={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search);
  }

  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <View style={styles.container}>
            <SearchInput onSearchHandlerEvent={onSearch} />
            <FlatList
              data={productsByCastegory}
              renderItem={renderProducts}
              keyExtractor={item => item.id}
            />
          </View>

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