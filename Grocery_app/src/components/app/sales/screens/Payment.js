import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const Payment = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        padding: 24,
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>

        <View style={{ backgroundColor: '#FFFFFF', width: 220, height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            style={{ width: 8.49, height: 14, top: 10, }}
            source={require('../../../../media/images/payment/back.jpg')}
          />
          <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 24, fontFamily: 'Klarna Text', color: '#FF5E00' }}>Payment</Text>
        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 103, borderRadius: 20, padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text' }}>Delivery Location</Text>
            <Text style={{ fontFamily: 'Klarna Text', fontWeight: '400', fontSize: 18, color: '#FF5E00' }}>Change</Text>
          </View>
          <View >
            <Image style={{ width: 16, height: 24, top: 10, backgroundColor: '#FF5E00' }}
              source={require('../../../../media/images/payment/location.jpg')}
            />
            <View style={{ left: 30, width: 180, bottom: 18 }}>
              <Text style={{ fontFamily: 'Klarna Text', fontWeight: '400', fontSize: 14, color: '#6D3805' }}>Floor 4, Kartini Tower No 43 Lumajang, Jawa Timur</Text>

            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 230, borderRadius: 20, padding: 20, marginTop: 20, }}>
          <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text' }}>Expected date & Time</Text>
          <View style={{ backgroundColor: '#ffffff', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
              <Image
                style={{ width: 20, height: 20, top: 12, left: 15, }}
                source={require('../../../../media/images/payment/lich.jpg')}
              />
            </View>
            <View>
              <Text style={{ top: 10, left: 35 }}>Select Date</Text>
            </View>
            <View>
              <Image
                style={{ width: 14, height: 14, top: 15, left: 175, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
                source={require('../../../../media/images/payment/v.jpg')}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
            <View style={{ backgroundColor: '#ffffff', top: 20, width: 94, height: 40, borderRadius: 7 }}>
              <Text style={{ fontSize: 13, color: '#6D3805', textAlign: 'center', top: 10 }}>8 AM - 11 AM</Text>
            </View>
            <View style={{ backgroundColor: '#ffffff', top: 20, width: 94, height: 40, borderRadius: 7 }}>
              <Text style={{ fontSize: 13, color: '#6D3805', textAlign: 'center', top: 10 }}>11 AM - 13 PM</Text>
            </View>
            <View style={{ backgroundColor: '#ffffff', top: 20, width: 94, height: 40, borderRadius: 7 }}>
              <Text style={{ fontSize: 13, color: '#6D3805', textAlign: 'center', top: 10 }}>13 PM - 15 PM</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 20 }}>
            <View style={{ backgroundColor: '#ffffff', top: 20, width: 94, height: 40, borderRadius: 7 }}>
              <Text style={{ fontSize: 13, color: '#6D3805', textAlign: 'center', top: 10 }}>15 PM - 17 PM</Text>
            </View>
            <View style={{ backgroundColor: '#ffffff', top: 20, width: 94, height: 40, borderRadius: 7 }}>
              <Text style={{ fontSize: 13, color: '#6D3805', textAlign: 'center', top: 10 }}>17 PM - 19 PM</Text>
            </View>
            <View style={{ backgroundColor: '#ffffff', top: 20, width: 94, height: 40, borderRadius: 7 }}>
              <Text style={{ fontSize: 13, color: '#6D3805', textAlign: 'center', top: 10 }}>19 PM - 21 PM</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 22, color: '#6D3805', }}>In-Store Pick Up</Text>
          <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', }}>FREE</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
          <Text style={{ fontWeight: '400', fontSize: 18, color: '#6D3805', }}>Some Stores May Be Temporarily Unavalable.</Text>
          <Image style={{width: 8, height: 14, right:18}} source={require('../../../../media/images/payment/next.jpg')} />
        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 100, borderRadius: 20, padding: 20, top: 20, borderWidth:1, borderColor: '#FFE6CC' }}>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
              <Image
                style={{ width: 35, height: 25, top: 12, left: 15, }}
                source={require('../../../../media/images/payment/giohang.jpg')}
              />
            </View>
            <View>
              <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left:30, }}>see Itemes</Text>
            </View>
            <View>
              <Image
                style={{ width: 8, height: 14, top: 15, left: 175, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
                source={require('../../../../media/images/payment/next.jpg')}
              />
            </View>
          </View>
        </View>
        {/* <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 100, borderRadius: 20, padding: 20, top: 20, borderWidth:1, borderColor: '#FFE6CC' }}>
          <Text style={{fontWeight: 700,color: '#6D3805', }}>Payment Method</Text>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
              <Image
                style={{ width: 35, height: 25, top: 12, left: 15, }}
                source={require('../../../../media/images/payment/giohang.jpg')}
              />
            </View>
            <View>
              <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left:30, }}>see Itemes</Text>
            </View>
            <View>
              <Image
                style={{ width: 8, height: 14, top: 15, left: 175, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
                source={require('../../../../media/images/payment/next.jpg')}
              />
            </View>
          </View>
        </View> */}
      </View>
    </ScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({})