
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SaleNavigation from './src/components/app/navigation/SaleNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Itemes from './src/components/app/sales/screens/Itemes';
import Payment02 from './src/components/app/sales/screens/Payment02';
import OrderFailed from './src/components/app/sales/screens/OrderFailed';
import OrderSuccessful from './src/components/app/sales/screens/OrderSuccessful';
import A from './src/components/app/sales/screens/A';
import B from './src/components/app/sales/screens/B';
import OrderNavigation from './src/components/app/sales/navigation/OrderNavigation';
import UnOrderNavigation from './src/components/app/sales/navigation/UnOrderNavigation';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Itemes' component={OrderNavigation} />
        <Tab.Screen name='UnOrderNavigation' component={UnOrderNavigation} />
        <Tab.Screen name='OrderFailed' component={Itemes} />
        <Tab.Screen name='Payment02' component={Payment02} />
      </Tab.Navigator>
      
    </NavigationContainer>

  )
}

export default App

