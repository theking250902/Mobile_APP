
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {Card} from 'react-native-shadow-cards';


const Shop = (props) => {

  const {navigation} = props;
  const Click = () =>{
    navigation.navigate('Category');
  } 
  const Click2 = () =>{
    navigation.navigate('CategoryDetail');
  } 

  //renderItemCategories
  const renderItemCategories = (props) => {
    const { item } = props;
    const { id, name, img, color, top, left, leftI } = item;

    return (
      <View >
        <View style={[styles.renderItem, { backgroundColor: color }]}>
          {/* Image */}
          <Image
            style={[styles.renderImage, { top: top, left: left }]}
            source={img}
          />
          {/* Text */}
          <Text style={[styles.nameItem, { left: leftI }]}>
            {name}
          </Text>
        </View>
      </View>
    )
  }
  //renderItemPopularDeals
  const renderItemPopularDeals = (props) => {
    const { item } = props;
    const { id, name, detail, price, img, icon } = item;
    return (

      <Card style={styles.containerRenderPopularDeals}>
        {/* Image */}
        <View style={[styles.containerImagePopularDeals]}>
          <Image
            source={img}
            style={[styles.renderImagePopularDeals,{alignSelf: 'center', marginTop: 20}]}
          />
        </View>

        <View style={[styles.containerText_Icon]}>
          {/* Text */}
          <View style={styles.containerTextPopularDeals}>
            <Text style={styles.renderNamePopularDeals}>{name}</Text>
            <Text style={styles.renderDetailPopularDeals}>{detail}</Text>
            <Text style={styles.renderPricePopularDeals}>$ {price}</Text>
          </View>
          {/* IconAdd */}
          <View style={styles.containerIconPopularDeals}>
            <Image
            style={styles.renderIconPopularDeals}
              source={icon}
            />
          </View>
        </View>
      </Card>
    );
  }

  //
  return (

    <View style={styles.container}>
      {/* Lungangen */}
      <View style={styles.containerLungangen}>
        <Image
          style={styles.imageLungangen}
          source={require('../../image/location-home.png')}
        />
        <Text style={styles.Lungangen}>Lungangen</Text>
      </View>

      {/* Search */}
      <View style={styles.containerSearch}>
        <Image
          style={styles.imageSearch}
          source={require('../../image/search.png')}
        />
        <TextInput
          style={styles.Search}
          placeholder='Search'
        />
      </View>

      {/* Categories */}
      <View style={styles.containerCategories}>
        <Text style={styles.Categories}>
          Categories
          
        </Text >     
        <TouchableOpacity onPress={Click}>
              <Text style={styles.seeAll}>
          see all
        </Text>
          </TouchableOpacity>
        
        
      </View>

      {/* FlatListCategories */}
      <FlatList
        style={{ marginLeft: 16, marginTop: 30,flexGrow: 0, height: 150}}
        data={dataImageCategories}
        renderItem={renderItemCategories}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={true}
        horizontal={true}
      
      />

      {/* Categories */}
      <View style={styles.containerPopularDeals}>
        <Text style={styles.PopularDeals}>
          Popular deals
        </Text >
        <TouchableOpacity onPress={Click2}>
        <Text style={styles.seeAll}>
          see all
        </Text>
        </TouchableOpacity>
      </View>

      {/*FlatListCategories */}
      <FlatList
        style={{ marginLeft: 16, marginTop: 30 ,flexGrow: 0, height: 210,}}
        data={dataImagePopularDeals}
        renderItem={renderItemPopularDeals}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={true}
        horizontal={true}
      />
      
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  //Lungangen 
  containerLungangen: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLungangen: {
    width: 17,
    height: 23,
    marginRight: 5,
  },
  Lungangen: {
    fontWeight: '700',
    color: '#FF5E00',
    fontSize: 24,
    lineHeight: 29,
  },

  //Search 
  containerSearch: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    
  },
  imageSearch: {
    width: 20,
    height: 18,
    position: 'absolute',
    left: 35,
    zIndex: 1
  },
  Search: {
    width: 343,
    height: 48,
    backgroundColor: '#F3F3F3',
    textAlign: 'center',
    borderRadius: 10,
  },

  //end Categories
  containerCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 32,

  },
  Categories: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
    color: '#6D3805'
  },
  seeAll: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    color: '#FF5E00'
  },

  //renderCategories 
  renderItem: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 50,
    textAlign: 'center',
    lineHeight: 100,
    margin: 5,
    position: 'relative'
  },
  renderImage: {
    width: '60%',
    height: '70%',
    position: 'absolute',
    left: 16,
    top: 10,
    resizeMode: 'contain',

  },
  nameItem: {
    position: 'absolute',
    top: 110,
    left: 35
  },

  //PopularDeals 
  containerPopularDeals: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 50,

  },
  PopularDeals: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
    color: '#6D3805'
  },
  //renderPopularDeals
  containerRenderPopularDeals: {
    backgroundColor: 'white',
    width: 150,
    height: 190,
    margin:  10,
    borderRadius: 20,
  },
  containerImagePopularDeals: {
    borderRadius: 20,
    height: 110
  },
  containerText_Icon: {
    width: 40,
    height: 80,
    flexDirection: 'row',
    paddingLeft: 10
  },
  containerTextPopularDeals: {
    width: 75,
  },
  containerIconPopularDeals: {
    width: 75,
    
  },
  renderImagePopularDeals: {
    width: '60%',
    height: '70%',
    resizeMode: 'contain',
  },
  renderNamePopularDeals: {
    color: '#6D3805',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18
  },
  renderDetailPopularDeals: {
    color: '#929292',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14
  },
  renderPricePopularDeals: {
    color: '#FF5E00',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24
  },
  renderIconPopularDeals: {
    top: 30,
    left: 30,
    resizeMode: 'contain',
    width: 30,
    height: 30
  },
})
//dataCategories
const dataImageCategories = [
  { id: 0, name: 'Fruits', img: require('../../image/Fruits.png'), color: '#EDD0FF', top: 10, left: 16, leftI: 35 },
  { id: 1, name: 'Vegetable', img: require('../../image/Vegetable.png'), color: '#FFD9BA', top: 10, left: 20, leftI: 20 },
  { id: 2, name: 'Meat', img: require('../../image/Meat.png'), color: '#FACCCC', top: 15, left: 20, leftI: 35 },
  { id: 3, name: 'Fish', img: require('../../image/Fish.png'), color: '#FBC1BD', top: 15, left: 20, leftI: 40 },
];
//dataPopularDeals
const dataImagePopularDeals = [
  { id: 0, name: 'Red Apple', detail: '1kg', price: 4.99, img: require('../../image/fruit5.png'), icon: require('../../image/AddIcon.png') },
  { id: 1, name: 'Mango', detail: '1kg', price: 7.99, img: require('../../image/fruit2.png'), icon: require('../../image/AddIcon.png') },
  { id: 2, name: 'Banana', detail: '1kg', price: 5.99, img: require('../../image/fruit3.png'), icon: require('../../image/AddIcon.png') },
  { id: 3, name: 'Strawberry', detail: '1kg', price: 3.99, img: require('../../image/fruit1.png'), icon: require('../../image/AddIcon.png') },
];