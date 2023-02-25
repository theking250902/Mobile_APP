import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const Screen1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.imageBack} source={require('../../../media/images/ic_back.png')} />
                <Text style={styles.text1}>Favorite</Text>
                <Text>   </Text>
            </View>
            <Image style={styles.imageHome} source={require('../../../media/images/home.png')} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text2}>Your heart is empty</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text3}>Start fall in love with some good goods</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.btn}><Text style={styles.text}>Start shoping</Text></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 26,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    imageBack: {

    },
    text1: {
        marginTop: 28,
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.165,
    },
    imageHome: {
        marginTop: 15,
    },
    text2: {
        marginTop: 14.6,
        color: '#6D3805',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.165,
    },
    text3: {
        marginTop: 8,
        width: 253,
        height: 42,
        textAlign: 'center',
        color: '#6D3805',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: -0.165,
    },
    btn: {
        width: 343,
        height: 50,
        marginTop: 41,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.165,
        textAlign: 'center',
    },
})

export default Screen1