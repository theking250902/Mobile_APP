import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Register1 from '../screens/Register1'
import Register2 from '../screens/Register2'
import Register3 from '../screens/Register3'
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register1' component={Register1}/>
            <Stack.Screen name='Register2' component={Register2}/>
            <Stack.Screen name='Register3' component={Register3}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
