import { StyleSheet, Text, View, Image, TextInput, Pressable, Button } from 'react-native'
import React from 'react'

const Login = (props) => {
    const {navigation} = props;
    return (

        
        
        <View style={styles.container}>

            <Image source={require('../../image/tenTrai.png')} style={styles.imageTren} ></Image>
            <Text style={styles.textSI}>Sign In</Text>
            <Image source={require('../../image/2.png')} style={styles.image4} resizeMode='cover' ></Image>
            <View style={styles.detail}>
                <Text style={styles.detailTop} >Enter the password</Text>
                <Text style={styles.detailBot}>For the security & safety please choose a password</Text>
            </View>

            <View style={styles.icon1}>
                <View style={styles.icon} >
                    <Image
                        source={require('../../image/khoaCam.png')}
                        style={styles.co}
                        resizeMode='cover'
                    ></Image>

                    <TextInput style={styles.numberPhone} placeholder='Password'></TextInput>
                    <Image
                        source={require('../../image/matCam.png')}
                        style={styles.tenXuong}
                        resizeMode='cover' ></Image>
                </View>

                <View style={styles.icon2} >
                    <Image
                        source={require('../../image/khoaCam.png')}
                        style={styles.co2}
                        resizeMode='cover'
                    ></Image>

                    <TextInput style={styles.numberPhone} placeholder='Confirm Password'></TextInput>
                    <Image
                        source={require('../../image/matCam.png')}
                        style={styles.tenXuong2}
                        resizeMode='cover' ></Image>
                </View>
            </View>



            <View style={styles.buttom1}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Register3')}>
                    <Text style={styles.buttomSI}>Next</Text>
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

    icon1: {
        marginTop: 40
    },

    detailBot: {
        marginTop: 5,
        width: 300,
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
        top: 10,
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
        bottom: 70,
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