import { ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

//import Categories from './src/screens/CategoriesScreen';
//import ProductsCategoryScreen from './src/screens/ProductsCategoryScreen';
//import CategoriesScreen from './src/screens/CategoriesScreen';

import Navigator from './src/navigation/Navigator';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('');
  const [productIdSelected, setProductIdSelected] = useState(null);

  const [fontLoaded] = useFonts({
    'Josefin-Regular' : require('./assets/fonts/JosefinSans-Italic.ttf'),
    'Josefin-Bold' : require('./assets/fonts/JosefinSans-Bold.ttf'),
    'Josefin-Italic' : require('./assets/fonts/JosefinSans-Italic.ttf'),
    'Josefin-Thin' : require('./assets/fonts/JosefinSans-Thin.ttf'),
    'Silk': require('./assets/fonts/Silkscreen-Bold.ttf')
  })

  if(!fontLoaded) return <ActivityIndicator/>

  // const onSelectCategory = (category) => {
  //   setCategorySelected(category)
  // }

  // const onSelectProductId = (item) => {
  //   setProductIdSelected(item);
  // }

  return (

    <Navigator/>

/*   <>
    {
       Operador Ternario 
      categorySelected
      ?
      <ProductsCategoryScreen 
        category={categorySelected}
        onSelectCategoryEvent={onSelectCategory} />
      :
      <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    }
    </>
*/
  );
}



