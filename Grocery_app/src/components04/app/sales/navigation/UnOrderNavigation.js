import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderFailed from '../screens/OrderFailed';
import OrderSuccessful from '../screens/OrderSuccessful';
import A from '../screens/A';

const Stack = createNativeStackNavigator();
const UnOrderNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='OrderSuccessful' component={OrderSuccessful}/>
        <Stack.Screen name='A' component={A}/>
    </Stack.Navigator>
  )
}

export default UnOrderNavigation