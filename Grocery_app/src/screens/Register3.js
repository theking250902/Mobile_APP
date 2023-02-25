import { StyleSheet, Text, View, Image, TextInput, Pressable, Button } from 'react-native'
import React from 'react'

const Login = (props) => {

    const { navigation } = props;

    return (
        <View style={styles.container}>

            <Image source={require('../../image/tenTrai.png')} style={styles.imageTren} ></Image>
            <Text style={styles.textSI}>Sign Up</Text>
            <Image source={require('../../image/3.png')} style={styles.image4} resizeMode='cover' ></Image>
            <View style={styles.detail}>
                <Text style={styles.detailTop} >Enter Verification Code</Text>
                <Text style={styles.detailBot}>We have sent SMS to:
                    046 XXX XX XX</Text>
            </View>

            <View style={styles.forLine} >
                <TextInput style={styles.forLine1}> <Text style={styles.text}></Text></TextInput>
                <TextInput style={styles.forLine1}><Text style={styles.text}></Text></TextInput>
                <TextInput style={styles.forLine1}><Text style={styles.text}></Text></TextInput>
                <TextInput style={styles.forLine1}><Text style={styles.text}></Text></TextInput>
                <TextInput style={styles.forLine1}><Text style={styles.text}></Text></TextInput>

            </View>



            <View style={styles.buttom1}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttomSI} >Sign Up</Text>
                </Pressable>
            </View>


            <View style={styles.line}>

                <Image source={require('../../image/lineDuoi.png')}
                    style={styles.lineDuoi}
                    resizeMode='cover' ></Image>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    text:{
        alignItems:'center',
        
        fontSize:51,
        fontWeight:'500',


    },

    forLine1: {
        width :50,
       borderBottomWidth :3,
       borderBottomColor: '#7F4E1D',
    },
    forLine: {
        marginBottom:15,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    icon1: {
        marginTop: 40
    },

    detailBot: {
        marginTop: 5,
        width: 158,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#7F4E1D'

    },
    detailTop: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 24,
        color: '#7F4E1D'

    },

    line: {
        marginTop: 65,
        alignItems: 'center',
    },
    textSU: {
        color: '#FF5E00',
    },
    textDon: {},
    textDS: {
        top: 1,
        flexDirection: 'row',
        left: 100,
    },

    buttomSI: {
        left: '41.87%',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: 0.41,
        color: 'white',
    },
    buttom1: {
        alignItems: 'center'
    },

    button: {
        width: 343,
        height: 48,
        marginTop: 25,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
        padding: 12,

    },

    FP: {
        left: '60.50 %',
        bottom: 68,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.41,
        color: '#FF5E00'

    },

    numberPhone2: {
        width: 283,
        height: 48,
        backgroundColor: '#F3F3F3',
        left: 22,
        color: '#AC8E71'
    },

    tenXuong2: {
        top: 15,
        left: 15
    },

    co2: {
        top: 15,
        left: 12
    },
    icon2: {
        bottom: 80,
        width: 343,
        height: 48,
        flexDirection: 'row',
        left: 16,
        backgroundColor: '#F3F3F3'
    },




    numberPhone: {
        width: 283,
        height: 48,
        backgroundColor: '#F3F3F3',
        left: 22,
        color: '#AC8E71'
    },

    tenXuong: {
        top: 15,
        left: 15
    },

    co: {
        top: 15,
        left: 12
    },
    icon: {
        bottom: 90,
        width: 343,
        height: 48,
        flexDirection: 'row',
        left: 16,
        backgroundColor: '#F3F3F3'
    },
    detail: {
        left: '4.27%',
        right: '4.27%',
        bottom: 70,
        fontWeight: '350',
        fontSize: 22,
        lineHeight: 26,
        letterSpacing: 0.41,
        color: '#6D3805'
    },
    image4: {
        bottom: 70
    },
    textSI: {
        width: 90,
        height: 41,
        left: 149,
        top: 14,
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FF5E00'
    },



    imageTren: {
        width: 8.49,
        height: 14,
        left: 20,
        top: 10
    },

    container: {
        flex: 1,
    },


})