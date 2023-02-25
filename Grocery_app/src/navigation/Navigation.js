import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import Screen4 from '../components/app/screens/Screen4';
import Screen1 from '../components/app/screens/Screen1';
import Screen5 from '../components/app/screens/Screen5';
import CategoryDetail from '../screen/CategoryDetail';
import ProductDetail from '../screen/ProductDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const news1 = () =>{
  return(
    <Stack.Navigator initialRouteName='Shop' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Shop" component={Shop} />
    <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    <Stack.Screen name="CategoryDetail" component={ProductDetail} />
    </Stack.Navigator>
  )
}
const Navigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown:false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Shop') {
          iconName = focused
            ? 'ios-home'  
            : 'ios-home';
        } else if (route.name === 'Category') {
          iconName = focused ? 'compass-outline' : 'compass-outline';
        }   else if (route.name === 'Cart') {
          iconName = focused ? 'ios-cart' : 'ios-cart';
        }  else if (route.name === 'Favorite') {
          iconName = focused ? 'heart-sharp' : 'heart-sharp';
        }  else if (route.name === 'Account') {
          iconName = focused ? 'person' : 'person';
        }           

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    })}
   >
      <Tab.Screen name="Shop" component={news1} />
      <Tab.Screen name="Category" component={ProductDetail} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorite" component={Screen1} />
      <Tab.Screen name="Account" component={Screen5} />
    
    </Tab.Navigator>
  )
}

export default Navigation
