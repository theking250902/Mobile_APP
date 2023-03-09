import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Payment = (props) => {
  const{navigation} = props;
  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        padding: 24,
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
<View style={{flexDirection:'row'}}>
  <Image style={styles.arrow} source={require('../image/Arrow.png')}/>
        <Text style={styles.text}>Payment</Text>
</View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 22, color: '#6D3805', }}>In-Store Pick Up</Text>
          <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', }}>FREE</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
          <Text style={{ fontWeight: '400', fontSize: 18, color: '#6D3805', }}>Some Stores May Be Temporarily Unavalable.</Text>
          <Image style={{ width: 8, height: 14, right: 18 }} source={require('../image/next.jpg')} />
        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 150, borderRadius: 7, padding: 20, top: 20, borderWidth: 1, borderColor: '#FFE6CC' }}>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>

            
            <View>
              <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left: 30, }}>goteborg {'\n'}
arkaden</Text>
<Text style={{marginLeft:30,marginTop:15,color:'#6D3805'}}>1.4 MI</Text>
            </View>
            <View>
              <Image
                style={{ width: 8, height: 14, top: 15, left: 210, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
               source={require('../image/next.jpg')}
              />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 150, borderRadius: 7, padding: 20, top: 20, borderWidth: 1, borderColor: '#FFE6CC' }}>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
   
            </View>
            
            <View>
              <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left: 30, }}>Kungsbacka {'\n'}
kungsmassan</Text>
<Text style={{marginLeft:30,marginTop:15,color:'#6D3805'}}>1.4 MI</Text>
            </View>
            <View>
              <Image
                style={{ width: 8, height: 14, top: 15, left: 180, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
               source={require('../image/next.jpg')}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() =>{navigation.navigate('Itemes')}}>

       
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 100, borderRadius: 20, padding: 20, top: 40,marginBottom:20, borderWidth: 1, borderColor: '#FFE6CC' }}>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
              <Image
                style={{ width: 35, height: 25, top: 12, left: 15, }}
               source={require('../image/giohang.jpg')}
              />
            </View>
            
            <View>
              <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left: 30, }}>see Itemes</Text>
            </View>
            <View>
              <Image
                style={{ width: 8, height: 14, top: 15, left: 175, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
               source={require('../image/next.jpg')}
              />
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={{ backgroundColor: '#FFF4E9', width: "100%", height: 200, borderRadius: 20, padding: 20, top: 20, borderWidth: 1, borderColor: '#FFE6CC', marginTop: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 18, color: '#6D3805', fontFamily: 'Klarna Text' }}>Payment Method</Text>
          <View style={{ backgroundColor: '#FFF4E9', width: 305, height: 48, borderRadius: 7, top: 10, flexDirection: 'row', }}>
            <View>
              <Image
                style={{ width: 41.5, height: 26, top: 12, }}
               source={require('../image/thanhtoan.jpg')}
              />
            </View>
            <View>
              <Text style={{ fontWeight: '400', fontSize: 16, color: '#6D3805', fontFamily: 'Klarna Text', top: 10, left: 13, }}>Apple Pay</Text>
            </View>
            <View>
              <Image
                style={{ backgroundColor: '#FFF4E9', width: 20, height: 17, top: 15, left: 175, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
               source={require('../image/check.jpg')}
              />
            </View>
          </View>
          <View style={{ backgroundColor: 'rgba(109, 56, 5, 0.11)', width: 343, height: 2, marginTop: 20, left: -20 }}></View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Image
              style={{ backgroundColor: '#FFF4E9', width: 41, height: 41, left: 1, fontWeight: '400', fontSize: 16, color: 'rgba(109, 56, 5, 0.64);' }}
              source={require('../image/thanhtoan1.jpg')}
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

export default Payment

const styles = StyleSheet.create({
  
    arrow:{
        width:9,
        height:15,
        marginTop:30,
    },
    text:{
      
        width:176,
        height:29,
        color:'#FF5E00',
        fontSize:23,
        marginTop:20,
        marginLeft:95,
        fontWeight:'bold'
    }
})