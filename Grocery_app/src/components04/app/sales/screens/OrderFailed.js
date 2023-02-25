import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const OrderFailed = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require('../../../../media/images/orderfailed/image.jpg')}/>
      <Text style={{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        color: '#6D3805',
        fontFamily: 'Klarna Text',
        top: 97,
      }}>Oops! Order Failed</Text>
      <Text style={{
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 16,
        color: '#6D3805',
        fontFamily: 'Klarna Text',
        top: 97,
      }}>Something went terribly wrong</Text>
      <Pressable onPress={() => navigation.navigate("A")} style={{ width: '100%', height: 50,borderRadius: 30,backgroundColor: '#FF5E00',alignItems: 'center',top: 150,
        
      }}>
        <Text style={{
            marginTop: 12,
            fontWeight: '700',
            fontSize: 18,
            color:'#ffffffff',
            }}>Try again</Text>
      </Pressable>
      <Pressable  style={{
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        top: 170,
        borderColor: '#FF5E00',
        borderWidth: 1,
        
      }}>
        <Text style={{
            marginTop: 12,
            fontWeight: '700',
            fontSize: 18,
            color:'#FF5E00',
            }}>Back Home</Text>
      </Pressable>
    </View>
  )
}

export default OrderFailed

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300,
        top:80,
        
    },
    container:{
        flex:1,
        backgroundColor: '#ffffff',
        padding:24,
    }
})