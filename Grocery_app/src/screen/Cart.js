import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../components02/CartItem'

const Cart = (props) => {
    const { navigation } = props;
    const [products, setProducts] = useState([
        { id: 1, name: 'Red Apple', quantity: 0 },
        { id: 2, name: 'Orginal Banana', quantity: 0 },
        { id: 3, name: 'Avocado Bowl', quantity: 0 },
        { id: 4, name: 'Salmon', quantity: 0 },
    ]);


    const handleIncrement = (id) => {
        const newProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        setProducts(newProducts);
    };

    const handleDecrement = (id) => {
        const newProducts = products.map((product) => {
            if (product.id === id && product.quantity > 0) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setProducts(newProducts);
    };
    const handleDelete = (id) => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
      };

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
                    data={products}
                    renderItem={({ item }) => <CartItem data={item} navigation={navigation} onIncrement={() => handleIncrement(item.id)}
                        onDecrement={() => handleDecrement(item.id)}  onDelete={() => handleDelete(item.id)}/>}
                    keyExtractor={(item) => item.id.toString()}
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
        marginTop: 10,
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


