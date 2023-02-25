import { View, Text, Button } from 'react-native'
import React from 'react'

const B = () => {
    const { navigation} = props;
  return (
    <View>
      <Button title="Click me" onPress={() => navigation.goback() }></Button>
    </View>
  )
}

export default B