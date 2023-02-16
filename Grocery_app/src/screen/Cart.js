import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions,FlatList } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'

const Cart = () => {
    return (
        <View>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}
            >
            </StatusBar>
            <View style={styles.headerView}>
                <TouchableOpacity>
                    <Image source={require('../image/Left_Arrow.png')}></Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.cartText}>Cart</Text>
            <View style={styles.listView}>
                <FlatList
                    data={dataLord}
                    renderItem = {({ item })=> <CartItem/>}
                    keyExtractor={(item) => item._id}
                />
            </View>
            <TouchableOpacity style={styles.btnCkeckout}>
                <Text style={styles.checkoutText}>CheckOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    headerView: {
        marginTop: 64,
        marginStart: 20
    },
    cartText: {
        color: '#FF5E00',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Klarna Text',
        alignSelf: 'center'
    },
    listView: {
        marginTop: 20,
        height: Dimensions.get('window').height - 250,
    },
    btnCkeckout: {
        backgroundColor: '#FF5E00',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginStart: 20,
        marginEnd: 20
    },
    checkoutText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Klarna Text',
    },

})


const dataLord = [
    { "_id": "1" },
    { "_id": "2" },
    { "_id": "3" },
    { "_id": "4" },
  ]