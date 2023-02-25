import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Payment02 = () => {
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
          <Image style={{ width: 8, height: 14, right: 18 }} source={require('../../../../media/images/payment/next.jpg')} />
        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 100, borderRadius: 20, padding: 20, top: 20, borderWidth: 1, borderColor: '#FFE6CC' }}>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
              <Image
                style={{ width: 35, height: 25, top: 12, left: 15, }}
                source={require('../../../../media/images/payment/giohang.jpg')}
              />
            </View>
            <View>
              <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left: 30, }}>see Itemes</Text>
            </View>
            <View>
              <Image
                style={{ width: 8, height: 14, top: 15, left: 175, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
                source={require('../../../../media/images/payment/next.jpg')}
              />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 200, borderRadius: 20, padding: 20, top: 20, borderWidth: 1, borderColor: '#FFE6CC', marginTop: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text' }}>Payment Method</Text>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
              <Image
                style={{ width: 41.5, height: 26, top: 12, }}
                source={require('../../../../media/images/payment/thanhtoan.jpg')}
              />
            </View>
            <View>
              <Text style={{ fontWeight: '400', fontSize: 16, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left: 13, }}>Apple Pay</Text>
            </View>
            <View>
              <Image
                style={{ backgroundColor: '#FFF4E9', width: 20, height: 17, top: 15, left: 175, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
                source={require('../../../../media/images/payment/check.jpg')}
              />
            </View>
          </View>
          <View style={{ backgroundColor: 'rgba(109, 56, 5, 0.11)', width: 343, height: 2, marginTop: 20, left: -20 }}></View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Image
              style={{ backgroundColor: '#FFF4E9', width: 41, height: 41, left: 1, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
              source={require('../../../../media/images/payment/thanhtoan1.jpg')}
            />
            <Text style={{ fontWeight: '400', fontSize: 16, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left: 15 }}>Cash on delivery</Text>
          </View>

        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 215, borderRadius: 20, padding: 20, top: 20, borderWidth: 1, borderColor: '#FFE6CC', marginTop: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text' }}>Order Sammery</Text>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
            <Text style={{fontWeight: "400",fontSize: 18, color: '#6D3805'}}>Subtotal</Text>
            <Text style={{fontWeight: "400",fontSize: 18, color: '#6D3805'}}>$137.00</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
            <Text style={{fontWeight: "400",fontSize: 18, color: '#6D3805'}}>Tax</Text>
            <Text style={{fontWeight: "400",fontSize: 18, color: '#6D3805'}}>$4.50</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
            <Text style={{fontWeight: "400",fontSize: 18, color: '#6D3805'}}>Delivery Price</Text>
            <Text style={{fontWeight: "400",fontSize: 18, color: '#6D3805'}}>$5.00</Text>
          </View>
          <View style={{ backgroundColor: 'rgba(109, 56, 5, 0.11)', width: 343, height: 2, marginTop: 20, left: -20 }}></View>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
            <Text style={{fontWeight: "700",fontSize: 18, color: '#6D3805'}}>Total:</Text>
            <Text style={{fontWeight: "700",fontSize: 18, color: '#6D3805'}}>$146.50</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#FF5E00', width: "100%", height: 50, borderRadius: 30, top: 20, borderWidth: 1, borderColor: '#FFE6CC', marginTop: 20 }}>
          <Text style={{fontWeight: "700",fontSize: 18, color: '#ffffff', alignSelf: 'center', top: 10}}>CheckOut$141.50</Text>
        </View>
        <View style={{width: 50, height: 50, marginTop: 20}}></View>
      </View>
    </ScrollView>

  )
}

export default Payment02

const styles = StyleSheet.create({})