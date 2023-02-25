import { StyleSheet, Text, View,Image, TextInput,Pressable,condition } from 'react-native'
import React from 'react'

const myList = ['item1', 'item2', 'item3', 'item4', 'item5'];
const NewAddress = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.arrow} source={require('../image/Arrow.png')}/>
        <Text style={styles.text}>New Addresses</Text>
        <TextInput placeholder='   Address Title' style={styles.textinput}/>
        <TextInput placeholder='   Name Surname' style={styles.textinput}/>
        <TextInput placeholder='   City' style={styles.textinput}/>
        <TextInput placeholder='   Address' style={styles.textinput}/>
        <Pressable style={styles.btn_up}>
            <Text style={styles.txt_btn}>Add</Text>
        </Pressable>
        
        
    </View>
  )
}

export default NewAddress

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