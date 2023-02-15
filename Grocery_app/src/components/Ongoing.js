import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Ongoing = () => {
  return (
    <View>
<Image style={styles.arrow} source={require('../image/Arrow.png')}/>
     <Text style={styles.text}>Orders</Text>
     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text style={{fontSize:20,color:'#FF5E00'}}>Ongoing</Text>
      <Text style={{fontSize:20,color:'#6D3805'}}>History</Text>
     </View>
     <View style={styles.chitren}></View>
     <View style={styles.chi}></View>
    </View>
  )
}

export default Ongoing

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
    
    },chitren:{
        backgroundColor:'#FF5E00',
        height:4,
        width:114,
        marginLeft:48,
        marginTop:20,
      borderTopLeftRadius:25,
      borderTopRightRadius:25
      }
})