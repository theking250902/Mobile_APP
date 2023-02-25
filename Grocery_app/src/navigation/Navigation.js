import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Address  from '../component1/Address'

import Login from '../screens/Login'
import Register1 from '../screens/Register1'
import Register2 from '../screens/Register2'
import Register3 from '../screens/Register3'
import Shop from '../screens/Shop'
import CartItem from '../components02/CartItem'
import Cart from '../screen/Cart'
import Category from '../screen/Category'
import A from '../components04/app/sales/screens/A'
import NewAddress from '../component1/NewAddress';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown:false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Category') {
          iconName = focused
            ? 'ios-home'  
            : 'ios-home';
        } else if (route.name === 'NewAddress') {
          iconName = focused ? 'compass-outline' : 'compass-outline';
        }   else if (route.name === 'NewAddress') {
          iconName = focused ? 'ios-cart' : 'ios-cart';
        }  else if (route.name === 'NewAddress') {
          iconName = focused ? 'heart-sharp' : 'heart-sharp';
        }  else if (route.name === 'NewAddress') {
          iconName = focused ? 'person' : 'person';
        }           

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    })}
   >
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="NewAddress" component={NewAddress} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigation
