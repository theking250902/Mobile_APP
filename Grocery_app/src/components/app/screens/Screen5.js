import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Screen5 = (props) => {

  const { navigation } = props;

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <Image style={styles.imageBack} source={require('../../../media/images/ic_back.png')} />
        <Text style={styles.text1}>Account</Text>
        <Text>   </Text>
      </View>

      <View style={{ marginTop: 50 }}>
        
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 25, alignItems: 'center' }}>
              <Image style={styles.imageItem} source={require('../../../media/images/ic_profile.png')} />
            </View>
            <Text style={styles.text2}>Profile</Text>
          </View>
        </Pressable>


        <Pressable onPress={() => navigation.navigate('Orders')}>
          <View style={{ flexDirection: 'row', marginTop: 33 }}>
            <View style={{ width: 25, alignItems: 'center' }}>
              <Image style={styles.imageItem} source={require('../../../media/images/ic_orders.png')} />
            </View>
            <Text style={styles.text2}>Orders</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Address')}>
        <View style={{ flexDirection: 'row', marginTop: 33 }}>
          <View style={{ width: 25, alignItems: 'center' }}>
            <Image style={styles.imageItem} source={require('../../../media/images/ic_address.png')} />
          </View>
          <Text style={styles.text2}>Address</Text>
        </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Payment')}>
        <View style={{ flexDirection: 'row', marginTop: 33 }}>
          <View style={{ width: 25, alignItems: 'center' }}>
            <Image style={styles.imageItem} source={require('../../../media/images/ic_payment.png')} />
          </View>
          <Text style={styles.text2}>Payment</Text>
        </View>
        </Pressable>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 26,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBack: {
    marginTop:20
  },
  imageItem: {

  },
  text1: {
    marginTop: 40,
    color: '#FF5E00',
    fontFamily: 'Klarna Text',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.165,
  },
  text2: {
    marginStart: 20,
    color: '#6D3805',
    fontFamily: 'Klarna Text',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.06,
  },

})

export default Screen5