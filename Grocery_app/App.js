import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './src/components/Welcome'
import NewAddress from './src/components/NewAddress'
import Address from './src/components/Address'
import Orders from './src/components/Orders'
import Ongoing from './src/components/Ongoing'
import EditAddress from './src/components/EditAddress'
import Payment from './src/components/Payment'


 


const App = () => {
  return (
    <View>
    <Payment/>
    </View>
  )
}

export default App