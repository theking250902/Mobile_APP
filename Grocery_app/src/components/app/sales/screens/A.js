import { View, Text, Button } from 'react-native'
import React from 'react'

const A = (props) => {
    const { navigation} = props;
  return (
    <View>
      <Button title="Click me" onPress={() => navigation.navigate("OrderFailed") }></Button>
    </View>
  )
}

export default A