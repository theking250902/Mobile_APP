import { StyleSheet, Text, View,Image, TextInput,Pressable,condition } from 'react-native'
import React from 'react'


const EditAddress = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.arrow} source={require('../image/Arrow.png')}/>
        <Text style={styles.text}>Edit Address</Text>
        <TextInput placeholder='   Home' style={styles.textinput}/>
        <TextInput placeholder='   mati egh' style={styles.textinput}/>
        <TextInput placeholder='   Goteborg' style={styles.textinput}/>
        <TextInput placeholder='   Lungangen 6, 41722' style={styles.textinput}/>
        <Pressable style={styles.btn_up}>
            <Text style={styles.txt_btn}>Update Address</Text>
        </Pressable>
        
        
    </View>
  )
}

export default EditAddress

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    arrow:{
        width:9,
        height:15,
        marginTop:30,
        marginLeft:-340
    },
    text:{
        width:176,
        height:29,
        color:'#FF5E00',
        fontSize:23,
        marginBottom:30
    },
    textinput:{
        width:343,
        height:48,
        backgroundColor:'#F3F3F3',
        borderRadius:5,
        marginTop:25
    },btn_up:{
        backgroundColor:'#FF5E00',
        borderRadius:30,
        width:343,
        height:50,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:170
    }
    ,txt_btn:{           
            color:'#FFFFFF'
    }
})
