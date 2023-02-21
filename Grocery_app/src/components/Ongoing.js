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
     <View style={{flexDirection:'row',marginTop:40,marginLeft:28}}>
     <Image style={{width:14,height:15}} source={require('../image/event_24px.png')}/>
     <Text style={{color:'#6D3805',fontSize:18,fontWeight:'bold',marginLeft:6,marginTop:-6}}>March 5, 2019</Text>
     <Text style={{color:'#F37A20',fontSize:14,marginLeft:160,marginTop:-4}}>6:30 pm</Text>
     </View>


     <View style={{flexDirection:'row'}}>   
     <View style={styles.chidut}>
     </View>
     <View>
     <Image style={{width:14,height:15}} source={require('../image/check_24px.png')}/>
     <Image style={{width:14,height:15}} source={require('../image/check_24px.png')}/>
     <Image style={{width:14,height:15}} source={require('../image/check_24px.png')}/>
     </View>
     </View>
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
      borderTopRightRadius:25,
      },
      chidut:{
        borderWidth:1,
        borderStyle:'dashed',
        marginTop:50,
         height:296,
       width:1,
       marginLeft:40,
       borderColor:'#DCDCDC'
      }
})