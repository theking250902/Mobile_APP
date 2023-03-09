import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Address = (props) => {
    const {navigation}  = props;
  return (
    <View >
        <View style={styles.image}>
        <Image style={styles.image1}  source={require('../image/Arrow.png')}/>
        <Image style={styles.image2}  source={require('../image/cong.png')}/>
        </View>
        <Text style={styles.text}>New Addresses</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditAddress')}>
             <View style={styles.container}>
            <Image style={{width:25,height:25,marginLeft:20}} source={require('../image/home.png')}/>
            <View style={{flexDirection:'column',marginLeft:10,marginTop:-10}}>
                <Text style={{color:'#6D3805',fontWeight:'bold',fontSize:18,marginBottom:8}}>Home</Text>
                <Text style={{color:'#6D3805'}} >Lungangen 6, 41722</Text>
            </View>
            <Image style={{color:'#6D3805',marginLeft:175}} source={require('../image/Vector.png')}/>
        </View>
        </TouchableOpacity>
       
        <View style={styles.chi}></View>
        <View style={styles.container}>
            <Image style={{width:25,height:25,marginLeft:20}} source={require('../image/cap.png')}/>
            <View style={{flexDirection:'column',marginLeft:10,marginTop:-10}}>
                <Text style={{color:'#6D3805',fontWeight:'bold',fontSize:18,marginBottom:8}}>Office</Text>
                <Text style={{color:'#6D3805'}} >Lungangen 6, 41722</Text>
            </View>
            <Image style={{color:'#6D3805',marginLeft:175}} source={require('../image/Vector.png')}/>
        </View>
        <View style={styles.chi}></View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
    image:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image1:{
        width:9,
        height:15,
        marginTop:30,
        marginLeft:20
    },image2:{
        width:15,
        height:15,
        marginTop:30,
        marginRight:20
    },text:{
        width:176,
        height:29,
        color:'#FF5E00',
        fontSize:23,
        marginLeft:100,marginTop:15,
        marginBottom:50
    },
    container:{
        flexDirection:'row',
        height:70
    },
    chi:{
        backgroundColor:'#E5E5E5',
        height:1,
        marginBottom:20
    }
    
})