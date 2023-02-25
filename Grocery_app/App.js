import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import ChangePassWord from './src/compoment03/ChangePassWord';
import EditProfile from './src/compoment03/EditProfile';
import ListMyCard from './src/compoment03/ListMyCard';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="ListMyCard" component={ListMyCard} />
        <Tab.Screen name="EditProfile" component={EditProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
