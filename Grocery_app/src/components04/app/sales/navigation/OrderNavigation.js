import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderFailed from '../screens/OrderFailed';
import A from '../screens/A';

const Stack = createNativeStackNavigator();
const OrderNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='OrderFailed' component={OrderFailed}/>
        <Stack.Screen name='A' component={A}/>
    </Stack.Navigator>
  )
}

export default OrderNavigation