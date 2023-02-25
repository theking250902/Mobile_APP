import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const CategoryItem = () => {
  return (
    <View style={styles.container}>
        <Image  style={styles.img} source={require('../image/Group190.png')}/>

    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:100,
        height:150,
    },
    img:{
        width:100,
        height:135,
        borderRadius:99
    },
    text:{
        alignSelf:'center',
        color: '#6D3805',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Klarna Text',
        marginTop: 12
    }
})