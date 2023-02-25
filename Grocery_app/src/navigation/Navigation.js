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


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='CartItem' component={Cart}/>
            <Stack.Screen name='Register1' component={Register1}/>
            <Stack.Screen name='Register2' component={Register2}/>
            <Stack.Screen name='Register3' component={Register3}/>
            <Stack.Screen name='Shop' component={Shop}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
