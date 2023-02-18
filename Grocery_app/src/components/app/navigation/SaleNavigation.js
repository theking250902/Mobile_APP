import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Itemes from '../sales/screens/Itemes';
import Payment02 from '../sales/screens/Payment02';
import OrderFailed from '../sales/screens/OrderFailed';
import OrderSuccessful from '../sales/screens/OrderSuccessful';

const Tab = createBottomTabNavigator();
const SaleNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Itemes' component={Itemes}/>
        <Tab.Screen name='Payment02' component={Payment02}/>
        <Tab.Screen name='OrderFailed' component={OrderFailed}/>
        <Tab.Screen name='OrderSuccessful' component={OrderSuccessful}/>
    </Tab.Navigator>
  )
}

export default SaleNavigation