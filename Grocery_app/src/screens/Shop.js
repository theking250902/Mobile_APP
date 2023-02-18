import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'



const Shop = (props) => {
  const [data, setData] = useState([]);

  const renderItem = (props) => {
    const { item } = props;
    const { name, image, id } = item;
    return (
      <View>
        <Text>{name}</Text>
        <Image source={{ uri: image }}
          style={{ width: 100, height: 100 }} />
      </View>
    )

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img1} source={require('../../image/map.png')}></Image>
        <Text style={styles.textHeader}>Lungangen</Text>
      </View>
      <View style={styles.input}>
        <Image style={styles.img2} source={require('../../image/search.png')}></Image>
        <TextInput style={styles.inputText} placeholder='Search' ></TextInput>
      </View>
      <View style={styles.detail}>
        <Text style={styles.Ca}>Categories</Text>
        <Text style={styles.See}>see all</Text>
      </View>
      <View>

      <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />

      </View>

    </View>
  )
}

export default Shop

const styles = StyleSheet.create({



  See: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#FF5E00',
  },
  Ca: {
    width: 112,
    height: 26,
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 26,
    color: '#6D3805',
  },



  detail: {
    top: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,

  },
  img2: {
    top: 13,
  },

  input: {
    width: "90%",
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    left: 18,
    top: 91,
    height: 48,
    borderRadius: 10,
  },

  img1: {

    left: 130,
    top: 75,
  },

  textHeader: {
    marginLeft: 8.63,
    width: 122,
    height: 29,
    left: 130,
    top: 74,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -.165,
    color: '#FF5E00',
  },

  header: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
  },
})



