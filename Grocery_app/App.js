import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './src/components/Welcome'
import NewAddress from './src/components/NewAddress'
import Address from './src/components/Address'
import Orders from './src/components/Orders'
import Ongoing from './src/components/Ongoing'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

 


const App = () => {
  return (
    <View>
         <Tab.Navigator>
      <Tab.Screen name="" component={Orders} />
      <Tab.Screen name="" component={Ongoing} />
    </Tab.Navigator>
    </View>
  )
}

export default App