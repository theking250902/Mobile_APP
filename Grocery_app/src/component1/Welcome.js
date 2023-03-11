import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const Welcome = (props) => {
    const {navigation}=props;

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../image/Illustration.png')}/>
        <Text style={styles.txt_realax}>Realax and shop</Text>
        <View style={styles.text}>
            <Text style={styles.text}>Shop online and get grocories.</Text>
            <Text style={styles.text}>delivered from stores to your home</Text>
            <Text style={styles.text}> in as fast as 1 hour .</Text>
        </View>
        <Pressable style={styles.btn_up}>
            <Text style={styles.txt_btn}>Sign up</Text>
        </Pressable>
        <Pressable style={styles.btn_in} onPress={()=>navigation.navigate('Login')}>
            <Text style={{color:'#FF5E00'}}>Sign in</Text>
        </Pressable>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    image:{
        width:310,
        height:330,
        marginTop:40,
        marginRight:5
    },
    txt_realax:{
        fontSize:20,
        marginTop:35,
        color:'#7F4E1D',
        marginBottom:15
    },text:{
        alignItems:'center',
        color:'#7F4E1D'
    },
    btn_up:{
        backgroundColor:'#FF5E00',
        borderRadius:30,
        width:343,
        height:50,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:51
    }
    ,txt_btn:{           
            color:'#FFFFFF'
    },
    btn_in:{
        borderColor:'#FF5E00',
        borderRadius:30,
        borderWidth:1 ,
        width:343,
        height:50,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:16,
    }
})