import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions, TextInput,useWindowDimensions } from 'react-native'
import React, { useState, } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ExampleTab from '../tab/ExampleTab';





const CategoryDetail = () => {
  
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
      <Text style={styles.cartText}>Fruits</Text>
      <View style={styles.searchView}>
        <Image source={require('../image/search.png')} />
        <TextInput style={styles.textInput} placeholder='Search' placeholderTextColor="#6D380591" />
      </View>
      <View >
       
      </View>


    </View>
  )
}

export default CategoryDetail
const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingStart: 20,
    paddingEnd: 20
  },
  headerView: {
    marginTop: 64,

  },
  cartText: {
    color: '#FF5E00',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Klarna Text',
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
  tabView: {
    height: Dimensions.get('window').height - 200,
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: ' #4E4B66',
  },
  activeLabel: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    borderBottomWidth: 4,
    borderColor: '#1877F2',
    height: 28,
  }
})