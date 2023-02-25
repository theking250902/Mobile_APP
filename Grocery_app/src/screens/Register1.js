import { StyleSheet, Text, View, Image, TextInput, Pressable, Button } from 'react-native'
import React from 'react'

const Register1 = (props) => {

    const { navigation } = props;


    return (
        <View style={styles.container}>

            <Image source={require('../../image/tenTrai.png')} style={styles.imageTren} ></Image>
            <Text style={styles.textSI}>Sign In</Text>
            <Image source={require('../../image/1.png')} style={styles.image4} resizeMode='cover' ></Image>
            <View style={styles.password}>
                <TextInput style={styles.inPassword} secureTextEntry={true} placeholder='Name Surname'></TextInput>
            </View>

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

            <Text style={styles.detail}> We need to verify you. We will send you a one time verification code. </Text>
            <View style={styles.buttom1}>
                <Pressable style={styles.button}
                    onPress={() => navigation.navigate('Register2')}>
                    <Text style={styles.buttomSI}>Next</Text>
                </Pressable>
            </View>
            <View style={styles.textDS}>
                <Text style={styles.textDon}>Don’t have an account?</Text>
                <Text style={styles.textSU}
                    onPress={() => navigation.navigate('Login')}> Sign Up</Text>
            </View>

            <View style={styles.line}>
                <Image source={require('../../image/lineDuoi.png')}
                    style={styles.lineDuoi}
                    resizeMode='cover' ></Image>

            </View>
        </View>
    )
}

export default Register1

const styles = StyleSheet.create({

    line: {
        top: 50,
        alignItems: 'center',
    },
    textSU: {
        color: '#FF5E00',
    },
    textDon: {},
    textDS: {
        top: 13,
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

        bottom: 65,
        width: 349,
        height: 48,
        left: 16,
        backgroundColor: '#F3F3F3',
        flexDirection: 'row'

    },
    inPassword: {
        width: 200,
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
        bottom: 55,
        width: 343,
        height: 48,
        flexDirection: 'row',
        left: 16,
        backgroundColor: '#F3F3F3'
    },
    detail: {
        left: '4.27%',
        right: '4.27%',
        bottom: 50,
        width: 330,
        fontWeight: '350',
        fontSize: 16,
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