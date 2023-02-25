import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <Image style={styles.imageBack} source={require('./src/media/images/ic_back.png')} />
                <Text style={styles.text1}>Profile</Text>
                <Text>   </Text>
            </View>

            <View style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 25, alignItems: 'center' }}>
                        <Image style={styles.imageItem} source={require('./src/media/images/account.png')} />
                    </View>
                    <Text style={styles.text2}>Edit Profile</Text>
                    <View style={{ marginStart: 136, marginTop: 6 }}>
                        <Image source={require('./src/media/images/backright.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 33 }}>
                    <View style={{ width: 25, alignItems: 'center' }}>
                        <Image style={styles.imageItem} source={require('./src/media/images/cp.png')} />
                    </View>
                    <Text style={styles.text2}>Change Password</Text>
                    <View style={{ marginStart: 136, marginTop: 6 }}>
                        <Image source={require('./src/media/images/backright.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 33 }}>
                    <View style={{ width: 25, alignItems: 'center' }}>
                        <Image style={styles.imageItem} source={require('./src/media/images/mc.png')} />
                    </View>
                    <Text style={styles.text2}>My Cards</Text>
                    <View style={{ marginStart: 136, marginTop: 6 }}>
                        <Image source={require('./src/media/images/backright.png')} />
                    </View>
                </View>

                <Text style={styles.text3}>App Settings</Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 25, alignItems: 'center' }}>
                        <Image style={styles.imageItem} source={require('./src/media/images/notifications.png')} />
                    </View>
                    <Text style={styles.text2}>Notifications</Text>
                    <View style={{ marginStart: 118, marginTop: 2 }}>
                        <Image source={require('./src/media/images/onoff.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 33 }}>
                    <View style={{ width: 25, alignItems: 'center' }}>
                        <Image style={styles.imageItem} source={require('./src/media/images/language.png')} />
                    </View>
                    <Text style={styles.text2}>Language</Text> 
                    <Text style={styles.textEnglish}>English</Text> 
                    <View style={{ marginStart: 20, marginTop: 6 }}>
                        <Image source={require('./src/media/images/backright.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 33 }}>
                    <View style={{ width: 25, alignItems: 'center' }}>
                        <Image style={styles.imageItem} source={require('./src/media/images/logout.png')} />
                    </View>
                    <Text style={styles.text2}>Logout</Text>
                </View>

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
    imageItem: {

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
    text2: {
        marginStart: 15,
        width: 160,
        color: '#6D3805',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        letterSpacing: 0.06,
    },
    text3: {
        marginVertical: 32,
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 26,
        letterSpacing: -0.3,
    },
    textEnglish: {
        marginTop: 4.5,
        marginStart: 65,
        color: '#804F1E',
        fontFamily: 'Klarna Text',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.3,
    },
})

export default Profile