import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import ProductItem from '../components02/ProductItem'

const ProductDetail = (props) => {
  
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
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
        <View style={styles.centerView}>
          <Image source={require('../image/mango.png')}></Image>
        </View>
        <Text style={styles.nameProduct}>Orginal Mango</Text>
        <Text style={styles.priceProduct}>$3.00 /st</Text>
        <Text style={styles.detailProduct}>Golden Ripe Alphonsa mangoes delivered to your house in the most hygenic way ever... Best for eating plain but can also be made into shakes and cakes.</Text>
        <View style={styles.actionView}>
          <View style={styles.controlView}>
            <TouchableOpacity style={styles.btnUpDown}>
              <Text style={styles.textBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>2</Text>
            <TouchableOpacity style={styles.btnUpDown}>
              <Text style={styles.textBtn}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image source={require('../image/heart.png')}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.addText}>Add To cart</Text>
        </TouchableOpacity>
        <Text style={styles.moreText}>You may also need</Text>

        <ScrollView nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
          {
            dataLord.map((item) => <View key={item._id} style={{ marginRight: 10,marginTop:30,marginStart:10,marginBottom:30 }} >
              <ProductItem />
            </View>)
          }

        </ScrollView>


      </ScrollView>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    paddingStart: 20,
    paddingEnd: 20,
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  headerView: {
    marginTop: 64
  },
  centerView: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameProduct: {
    color: '#6D3805',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Klarna Text'
  },
  priceProduct: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Klarna Text',
    marginTop: 6
  },
  detailProduct: {
    color: '#6D3805',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Klarna Text',
    marginTop: 8
  },

  actionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  controlView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 25,
    paddingStart: 5,
    paddingEnd: 5,
    borderWidth:1,
    backgroundColor:'#6D380508',
    borderColor:'#6D380520'
  },
  btnUpDown: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 99,
    elevation:5
  },
  textBtn: {
    color: '#6D3805',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center'
  },
  quantityText: {
    color: '#6D3805',
    fontSize: 24,
    fontWeight: '600',
  },
  btnAdd: {
    backgroundColor: '#FF5E00',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  addText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Klarna Text',
  },
  moreText: {
    marginTop: 50,
    color: '#6D3805',
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
  { "_id": "5" },
  { "_id": "6" },
]