import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    <View>
     <Image style={styles.arrow} source={require('../image/Arrow.png')}/>
     <Text style={styles.text}>Orders</Text>
     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text style={{fontSize:20,color:'#6D3805'}}>Ongoing</Text>
      <Text style={{fontSize:20,color:'#FF5E00'}}>History</Text>
     </View>
     <View style={styles.chitren}></View>
     <View style={styles.chi}></View>
     <View style={{flexDirection:'row'}}>
      <Image style={styles.image} source={require('../image/Group93.png')}/>
     <View style={{flexDirection:'column',height:60,justifyContent:'space-around',marginTop:10}}>
    <Text style={{color:'#804F1E',fontSize:18,fontWeight:'bold'}}>Order #345</Text>
    <Text style={{color:'#5EC401',fontSize:14}}>Delivered</Text>
    <Text style={{color:'#804F1E',fontSize:14}}>October 26, 2014</Text>
     </View>
      <Text style={{color:'#F37A20',fontSize:20,fontWeight:'bold',marginLeft:140,marginTop:25}}>
      $700
      </Text>
     </View>
     <View style={[styles.chi,{marginTop:10}]}></View>
     <View style={{flexDirection:'row'}}>
      <Image style={styles.image} source={require('../image/Group93.png')}/>
     <View style={{flexDirection:'column',height:60,justifyContent:'space-around',marginTop:10}}>
    <Text style={{color:'#804F1E',fontSize:18,fontWeight:'bold'}}>Order #346</Text>
    <Text style={{color:'#F2110D',fontSize:14}}>Cancelled</Text>
    <Text style={{color:'#804F1E',fontSize:14}}>October 14, 2016</Text>
     </View>
      <Text style={{color:'#F37A20',fontSize:20,fontWeight:'bold',marginLeft:140,marginTop:25}}>
      $452
      </Text>
     </View>
     <View style={[styles.chi,{marginTop:10}]}></View>
     <View style={{flexDirection:'row'}}>
      <Image style={styles.image} source={require('../image/Group93.png')}/>
     <View style={{flexDirection:'column',height:60,justifyContent:'space-around',marginTop:10}}>
    <Text style={{color:'#804F1E',fontSize:18,fontWeight:'bold'}}>Order #347</Text>
    <Text style={{color:'#5EC401',fontSize:14}}>Delivered</Text>
    <Text style={{color:'#804F1E',fontSize:14}}>July 26, 2017</Text>
     </View>
      <Text style={{color:'#F37A20',fontSize:20,fontWeight:'bold',marginLeft:155,marginTop:25}}>
         $281
      </Text>
     </View>
     <View style={[styles.chi,{marginTop:10}]}></View>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  arrow:{
    width:9,
    height:15,
    marginTop:30,
    marginLeft:20
},text:{
  width:176,
  height:29,
  color:'#FF5E00',
  fontSize:23,
  marginBottom:30,
  marginLeft:150,
  fontWeight:'bold',
  marginTop:10
},chi:{
  backgroundColor:'#E5E5E5',
  height:1, 

},
chitren:{
  backgroundColor:'#FF5E00',
  height:4,
  width:114,
  marginLeft:243,
  marginTop:20,
borderTopLeftRadius:25,
borderTopRightRadius:25
},image:{
  width:44,
  height:44,
  margin:18
},
})