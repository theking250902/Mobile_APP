
import React from 'react'
import Shop from './src/screens/Shop'
import Navigation from './src/navigation/Navigation'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../Grocery_app/src/component1/Welcome'
import NewAddress from '../Grocery_app/src/component1/NewAddress';
import Address from './src/component1/Address';
import Category from './src/screen/Category';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryDetail from './src/screen/CategoryDetail';
import Screen5 from './src/components/app/screens/Screen5';
import CartItem from './src/components02/CartItem';
import Login from './src/screens/Login';
import Register1 from './src/screens/Register1';
import Register2 from './src/screens/Register2';
import Register3 from './src/screens/Register3';
import Screen3 from './src/components/app/screens/Screen3';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  return (
//    <NavigationContainer>
//     {/* <Navigation/> */}
//     <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
 
//     <Stack.Screen name="Login" component={Login} />
//     <Stack.Screen name="Register1" component={Register1} />
//     <Stack.Screen name="Register2" component={Register2} />
//     <Stack.Screen name="Register3" component={Register3} />
//     <Stack.Screen name="Navigation" component={Navigation} />

//     </Stack.Navigator>
//    </NavigationContainer>
<View>
    <Screen3/>
</View>
  )
}

export default App

