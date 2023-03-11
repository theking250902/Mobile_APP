import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

const CartItem = (props) => {
    const { navigation } = props;
    const { data, onIncrement, onDecrement, onDelete } = props;
    const Click = () => {
        navigation.navigate('ProductDetail');
    }
    const rightSwipe = () => {
        return (
            <TouchableOpacity style={styles.swipeView} onPress={onDelete}>
                <Image source={require('../image/btnDel.png')} />
            </TouchableOpacity>
        )

    }

    return (

        <GestureHandlerRootView>
            <Swipeable renderRightActions={rightSwipe}>
                <TouchableOpacity onPress={Click}>
                    <View style={styles.container}>
                        <View style={styles.imgView}>
                            <Image source={require('../image/strawberry.png')} />
                        </View>
                        <View style={styles.centerView}>
                            <Text style={styles.productName}>{data.name}</Text>
                            <View style={styles.controlView}>
                                <TouchableOpacity style={styles.btnUpDown} onPress={onDecrement}>
                                    <Text style={styles.textBtn}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{data.quantity}</Text>
                                <TouchableOpacity style={styles.btnUpDown} onPress={onIncrement}>
                                    <Text style={styles.textBtn}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.priceText}>$24</Text>
                            <Text style={styles.unit}>st</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </Swipeable>
        </GestureHandlerRootView>


    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        height: 100,
        borderBottomWidth: 1,
        borderColor: '#6D380520',
        flexDirection: 'row',
        flex: 1
    },
    imgView: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerView: {
        width: Dimensions.get('window').width - 200,
        height: 100
    },
    productName: {
        color: '#6D3805',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Klarna Text',
        marginTop: 8,
        marginStart: 5
    },
    controlView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        height: 30,
        borderRadius: 25,
        paddingStart: 1,
        paddingEnd: 1,
        borderWidth: 1,
        backgroundColor: '#6D380508',
        borderColor: '#6D380520',
        alignSelf: 'center',
        marginTop: 25
    },
    btnUpDown: {
        width: 25,
        height: 25,
        backgroundColor: '#FFFFFF',
        borderRadius: 99,
        borderColor: '#6D380510',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: '#6D3805',
        fontSize: 16,
        fontWeight: '700',
    },
    quantityText: {
        color: '#6D3805',
        fontSize: 16,
        fontWeight: '600',
    },
    priceText: {
        color: '#6D3805',
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Klarna Text',
        marginEnd: 10
    },
    unit: {
        color: '#6D3805',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Klarna Text',
        top: 6
    },
    priceView: {
        flexDirection: 'row',
        top: 60,
        start: 30
    },
    swipeView: {
        width: 70,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A42B32'
    }

})