import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProductItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.centerVIew}>
                <Image source={require('../image/strawberry.png')} />
            </View>
            <Text style={styles.productName}>Strawberry</Text>
            <Text style={styles.weightText}>1kg</Text>
            <View style={styles.ctrlView}>
                <Text style={styles.priceText}>$24.0</Text>
                <Image source={require('../image/btn+.png')} />
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: 165,
        height: 200,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        elevation: 3,
        borderWidth:1,
        borderColor:'#6D380510'
    },
    centerVIew: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productName: {
        color: '#6D3805',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Klarna Text',
        marginTop: 8,
        marginStart: 15
    },
    weightText: {
        color: '#929292',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Klarna Text',
        marginStart: 22
    },
    ctrlView: {
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceText: {
        color: '#FF5E00',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Klarna Text',
    }
})