
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ongoing from './Ongoing';
import Orders from './Orders';

;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Tabb = createMaterialTopTabNavigator();

const App = () => {
  return (
 
  <NavigationContainer>
  <Tabb.Navigator>

</Tabb.Navigator>
</NavigationContainer>
  )
}

export default App

