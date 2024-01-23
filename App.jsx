import { ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import store from './src/store';
import MainNavigator from './src/navigation/MainNavigator'
import { ShopSliceInitializer } from './src/features/shopSlice';

export default function App() {

  const [fontLoaded] = useFonts({
    'Josefin-Regular': require('./assets/fonts/JosefinSans-Italic.ttf'),
    'Josefin-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'Josefin-Italic': require('./assets/fonts/JosefinSans-Italic.ttf'),
    'Josefin-Thin': require('./assets/fonts/JosefinSans-Thin.ttf'),
    'Silk': require('./assets/fonts/Silkscreen-Bold.ttf')
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>


  );
}


