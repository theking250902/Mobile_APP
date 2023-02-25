import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
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
import OrderFailed from '../components04/app/sales/screens/OrderFailed'


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='CartItem' component={OrderFailed}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
