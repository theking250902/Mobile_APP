import { StyleSheet, Text, View, Image, TextInput, Pressable, Button } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {

    const { navigation } = props;

    return (
        <View style={styles.container}>

            <Image source={require('../../image/tenTrai.png')} style={styles.imageTren} ></Image>
            <Text style={styles.textSI}>Sign In</Text>
            <Image source={require('../../image/4.png')} style={styles.image4} resizeMode='cover' ></Image>
            <Text style={styles.detail}>Enter your phone number and
                password to access your account</Text>
            <View style={styles.icon} >
                <Image
                    source={require('../../image/co.png')}
                    style={styles.co}
                    resizeMode='cover'
                ></Image>
                <Image
                    source={require('../../image/tenXuong.png')}
                    style={styles.tenXuong}
                    resizeMode='cover' ></Image>

                <TextInput style={styles.numberPhone} placeholder='Number Phone'></TextInput>
            </View>

            <View style={styles.password}>
                <TextInput style={styles.inPassword} secureTextEntry={true} placeholder='Password'></TextInput>
                <Image source={require('../../image/eyes.png')}
                    style={styles.eyes}
                    resizeMode='cover'></Image>
            </View>
            <Text style={styles.FP}> Forgote Password</Text>
            <View style={styles.buttom1}>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Navigation')}>
                    <Text style={styles.buttomSI}  >Sign in</Text>
                </Pressable>
            </View>
            <View style={styles.textDS}>
                <Text style={styles.textDon}>Don’t have an account?</Text>

                <Text style={styles.textSU}
                    onPress={() => navigation.navigate('Register1')} > Sign Up</Text>
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

    line: {
        top: 30,
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
        bottom: 5,
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



    eyes: {
        top: 12,
        left: 238,

    },

    password: {

        bottom: 84,
        width: 349,
        height: 48,
        left: 16,
        backgroundColor: '#F3F3F3',
        flexDirection: 'row'

    },
    inPassword: {
        color: '#AC8E71'
    },

    numberPhone: {
        width: 283,
        height: 48,
        backgroundColor: '#F3F3F3',
        left: 22,
        color: '#AC8E71'
    },

    tenXuong: {
        top: 22,
        left: 20
    },

    co: {
        top: 12,
        left: 10
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
        bottom: 110,
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
        width: 78,
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