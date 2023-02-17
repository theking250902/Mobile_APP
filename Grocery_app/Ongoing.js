import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

const Ongoing = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageHome} source={require('./src/media/images/ongoing.png')} />

            <Text style={styles.text2}>There is n ongoing order right now. You can order from home</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 26,
        backgroundColor: '#fff',
    },
    imageHome: {
        marginTop: 15,
    },
    text2: {
        width: 310,
        marginTop: 17,
        color: '#804F1E',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        letterSpacing: -0.165,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Ongoing