
import React from 'react'
import Shop from './src/screens/Shop'
import Navigation from './src/navigation/Navigation'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../Grocery_app/src/component1/NewAddress'
import NewAddress from '../Grocery_app/src/component1/NewAddress';
import Address from './src/component1/Address';
import Category from './src/screen/Category';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryDetail from './src/screen/CategoryDetail';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Navigation/>
   </NavigationContainer>

  )
}

export default App

