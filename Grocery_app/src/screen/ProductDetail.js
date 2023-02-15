import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const ProductDetail = () => {
  return (
    <View style={styles.container}>
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
          <TouchableOpacity  style={styles.btnUpDown}>
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
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    paddingStart: 20,
    paddingEnd: 20,
    backgroundColor: '#FFFFFF',
    flex: 1
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
  
  actionView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:30
  },
  controlView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:280,
    height:50,
    backgroundColor:'#6D380515',
    borderRadius:25,
    paddingStart:5,
    paddingEnd:5
  },
  btnUpDown:{
    width:40,
    height:40,
    backgroundColor:'#FFFFFF',
    borderRadius:99,
  },
  textBtn:{
    color: '#6D3805',
    fontSize: 28,
    fontWeight: '600',
    textAlign:'center'
  },
  quantityText:{
    color: '#6D3805',
    fontSize: 24,
    fontWeight: '600',
  },
  btnAdd:{
    backgroundColor:'#FF5E00',
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  },
  addText:{
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Klarna Text',
  },
  moreText:{
    marginTop:50,
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Klarna Text',
  }
})