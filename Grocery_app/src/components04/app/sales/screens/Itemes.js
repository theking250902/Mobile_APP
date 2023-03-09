import { StyleSheet, Text, View, Image, Pressable, FlatList, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const Itemes = (props) => {
    const {navigation } = props;
    const [text, setText] = useState(0);
    const [selected, isSelected] = useState(null);

    const renderItem = (props) => {
        const { item } = props;
        const { name, quantity, price, image, id } = item;
        const isSelected = selected === item.id;
        const ClickItemtang = () => {
            setText((c) => c + 1);
        }
        const ClickItemgiam = () => {
            setText((c) => c - 1);
        }
        console.log(quantity);
        console.log("<<<<<<");
        return (

            <TouchableOpacity onPress={() =>{navigation.navigate('ProductDetail')}}  style={{
                backgroundColor: '#ffffff',
                width: 393,
                height: 110,
                right: 24,
                borderBottomColor: '#E5E5E5',
                borderBottomWidth: 1,
            }}>

                <Image style={{ width: 80, height: 80, top: 10, left: 22, }}
                    source={{ uri: image }}
                />
                <Text style={{
                    fontWeight: '700', fontSize: 18, color: '#6D3805', left: 114, bottom: 60,
                }}>{name}</Text>
                <Pressable  style={{
                    backgroundColor: '#F4F4F4', width: 98, height: 32, alignSelf: 'center', bottom: 40, borderRadius: 30,
                }}>
                    <TouchableOpacity
                        onPress={ClickItemgiam}
                        style={{
                            backgroundColor: '#FFFFFF', width: 25, height: 25, borderRadius: 30, top: 3, left: 5,
                        }}>
                        <Text style={{ fontSize: 30, bottom: 10, left: 8, color: '#000000' }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{
                        alignSelf: 'center', bottom: 20, fontWeight: '400', color: '#6D3805',
                    }}>{text}</Text>

                    <TouchableOpacity
                        onPress={ClickItemtang}
                        style={{
                            backgroundColor: '#FFFFFF', width: 25, height: 25, borderRadius: 30, top: -40.5, left: 69,
                        }}>
                        <Text style={{ fontSize: 25, bottom: 6, left: 5, color: '#000000' }}>+</Text>
                    </TouchableOpacity>
                </Pressable>
                <Text style={{
                    color: '#6D3805', fontWeight: '400', fontFamily: 'Klarna Text', fontSize: 18, left: 296, bottom: 67,
                }}>{price}</Text>
            </TouchableOpacity>
        )

    }
    return (
        <View style={{
            padding: 24,
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <Pressable>
                <Image
                    style={{
                        width: 8.49,
                        height: 14,
                        top: 10,
                    }}
                    source={require('../../../../media/images/itemes/back.jpg')}
                />
            </Pressable>
            <Text style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 24,
                fontFamily: 'Klarna Text',
                color: '#FF5E00'
            }}>Itemes</Text>
            {/* item */}

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={Math.random}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>


        </View>
    )
}

export default Itemes

const styles = StyleSheet.create({})

var data = [
    {
        "id": "01",
        "name": "Red Apple",
        "quantity": "2",
        "price": "$4,99 kg",
        "image": "https://fruityland.co/wp-content/uploads/2021/02/Red-Delicious-FL.jpg",
    },
    {
        "id": "02",
        "name": "Orginal Banana",
        "quantity": "2",
        "price": "$5,99 kg",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVkQK0u6PFZL7RrsjHitIIaAC461koXcjnw&usqp=CAU",
    },

    {
        "id": "03",
        "name": "Avocado Bowl",
        "quantity": "1",
        "price": "$24 st",
        "image": "https://benhvienthucuc.vn/wp-content/uploads/2020/02/an-bo-nhieu-co-beo-khong.jpg",
    },

    {
        "id": "04",
        "name": "Salmon",
        "quantity": "2",
        "price": "$50 kg",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2zOA2Q1aqCnjwGW7Ylb33tkiIh3dWbhmP-i1P_A8WY-SxPcKlA-L0tJDjCvJ5RQQI8A&usqp=CAU",
    },
    {
        "id": "04",
        "name": "Red Apple1",
        "quantity": "3",
        "price": "$4,92 kg",
        "image": "https://fruityland.co/wp-content/uploads/2021/02/Red-Delicious-FL.jpg",
    },
    {
        "id": "04",
        "name": "Red Apple22",
        "quantity": "5",
        "price": "$4,91 kg",
        "image": "https://fruityland.co/wp-content/uploads/2021/02/Red-Delicious-FL.jpg",
    },
    {
        "id": "04",
        "name": "Red Apple3",
        "quantity": "1",
        "price": "$4,9 kg",
        "image": "https://fruityland.co/wp-content/uploads/2021/02/Red-Delicious-FL.jpg",
    },



]