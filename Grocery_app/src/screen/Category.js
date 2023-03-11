import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../components02/CategoryItem'



const Category = () => {
    
   
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'} />
            <Text style={styles.title}>Categories</Text>
            <View style={styles.searchView}>
                <TouchableOpacity >
                <Image source={require('../image/search.png')} />
                </TouchableOpacity>
               
                <TextInput style={styles.textInput} placeholder='Search' placeholderTextColor="#6D380591" />
            </View>

            <View style={styles.listView}>
                <FlatList
                    data={dataLord}
                    numColumns={3}
                    columnWrapperStyle={styles.columnWrapper}
                    renderItem={({ item }) => <CategoryItem />}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Category
const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
    container: {
        paddingStart: 20,
        paddingEnd: 20,
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    title: {
        color: '#FF5E00',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Klarna Text',
        marginTop: 64,
        alignSelf: 'center'
    },
    searchView: {
        width: width,
        height: 48,
        backgroundColor: '#F1F1F1',
        marginTop: 17,
        borderRadius: 3,
        paddingStart: 15,
        paddingEnd: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        marginStart: 10
    },
    listView: {
        marginTop: 25
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },

})


const dataLord = [
    { "_id": "1" },
    { "_id": "2" },
    { "_id": "3" },
    { "_id": "4" },
    { "_id": "5" },
    { "_id": "6" },
    { "_id": "7" },
    { "_id": "8" },
    { "_id": "9" },
    { "_id": "10" },
    { "_id": "11" },
    { "_id": "12" },
    { "_id": "13" },
    { "_id": "14" },
    { "_id": "15" },
    { "_id": "16" },
    { "_id": "17" },
    { "_id": "18" },
    { "_id": "19" },
    { "_id": "20" },
    { "_id": "21" },
]