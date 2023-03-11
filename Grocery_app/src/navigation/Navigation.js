import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Address  from '../component1/Address'
import Orders  from '../component1/Orders'
import EditAddress  from '../component1/EditAddress'
import Payment  from '../component1/Payment'

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
import ChangePassWord from '../compoment03/ChangePassWord';
import Itemes from '../components04/app/sales/screens/Itemes';
import EditProfile from '../compoment03/EditProfile';
import Ongoing from '../component1/Ongoing';
import Profile from '../components/app/screens/Profile';
import NewCard from '../compoment03/NewCard';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabb = createMaterialTopTabNavigator();


const News1 = () =>{
  return(
    <Stack.Navigator initialRouteName='Shop' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Shop" component={Shop} />
    <Stack.Screen name="Category" component={Category} />
    <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    </Stack.Navigator>
  )
}
const News3 = () =>{
  return(
    <Stack.Navigator initialRouteName='Cart' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    <Stack.Screen name="CartItem" component={CartItem} />

    </Stack.Navigator>
  )
}
const News5 = () =>{
  return(
    <Stack.Navigator initialRouteName='Screen5' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Screen5" component={Screen5} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="CartItem" component={CartItem} />
    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="EditAddress" component={EditAddress} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    <Stack.Screen name="Itemes" component={Itemes} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="Change" component={ChangePassWord} />
    <Stack.Screen name="NewCard" component={NewCard} />
    </Stack.Navigator>
  )
}
const New6 = () =>{
  return(
    <Tabb.Navigator>
      <Tabb.Screen name="Ongoing" component={Ongoing} />
      <Tabb.Screen name="Orders" component={Orders} />
    </Tabb.Navigator>
  )
}
const Navigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown:false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'News1') {
          iconName = focused
            ? 'ios-home'  
            : 'ios-home';
        } else if (route.name === 'Category') {
          iconName = focused ? 'compass-outline' : 'compass-outline';
        }   else if (route.name === 'News3') {
          iconName = focused ? 'ios-cart' : 'ios-cart';
        }  else if (route.name === 'Favorite') {
          iconName = focused ? 'heart-sharp' : 'heart-sharp';
        }  else if (route.name === 'News5') {
          iconName = focused ? 'person' : 'person';
        }           

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    })}
   >
      <Tab.Screen name="News1" component={News1} options={{title:'Shop'}} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="News3" component={News3}  options={{title:'Cart'}}/>
      <Tab.Screen name="Favorite" component={Screen4} />
      <Tab.Screen name="News5" component={News5}  options={{title:'Account'}} />
    
    </Tab.Navigator>
  )
}

export default Navigation
