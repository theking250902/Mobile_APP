import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ongoing from './Ongoing';
import History from './History';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator();

const Orders = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.imageBack} source={require('./src/media/images/ic_back.png')} />
                <Text style={styles.text1}>Orders</Text>
                <Text>   </Text>
            </View>

            <Tab.Navigator style={{ flex: 0.9, marginTop: 28 }}  screenOptions={{
                tabBarLabelStyle: { fontSize: 18, color: "#FF5E00", textTransform: 'none', opacity: 0.87, lineHeight: 24, letterSpacing: 0.1 }, 
                tabBarIndicatorStyle: { backgroundColor: '#FF5E00' }, 
            }} >
                <Tab.Screen name="Ongoing" component={Ongoing} />
                <Tab.Screen name="History" component={History} />
            </Tab.Navigator>
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

})

export default Orders