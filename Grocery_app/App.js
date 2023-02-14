import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderFailed from './src/components/app/sales/screens/OrderFailed';
import OrderSuccessful from './src/components/app/sales/screens/OrderSuccessful';
import Itemes from './src/components/app/sales/screens/Itemes';
import Payment from './src/components/app/sales/screens/Payment';
import Payment02 from './src/components/app/sales/screens/Payment02';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <OrderSuccessful/>
  )
}

export default App