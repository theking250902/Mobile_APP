import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState, } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ExampleTab from '../tab/ExampleTab';


const CategoryDetail = () => {

  const FruitRoute = () => (
    <ExampleTab />
  );

  const VegetableRoute = () => (
    <ExampleTab />
  );
  const MeatRoute = () => (
    <ExampleTab />
  );
  const FishRoute = () => (
    <ExampleTab />
  );
  const SeafoodRoute = () => (
    <ExampleTab />
  );
  const renderScene = SceneMap({
    fruit: FruitRoute,
    vegetable: VegetableRoute,
    meat: MeatRoute,
    fish: FishRoute,
    seafood:SeafoodRoute
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'fruit', title: 'Fruit' },
    { key: 'vegetable', title: 'Vegetable' },
    { key: 'meat', title: 'Meat' },
    { key: 'fish', title: 'Fish' },
    { key: 'seafood', title: 'Seafood' },
  ]);
  const renderTabBar = props => (

    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor:'#FF5E00',height:3}}
        style={{ backgroundColor: 'transparent' }}
        scrollEnabled={true}
        gap={10}
        tabStyle={{ width: "auto"}}
        onLayout={event => {
            const { width } = event.nativeEvent.layout;
            props.setTabBarWidth(props.navigationState.index, width);
        }}
        renderLabel={({ route, focused }) => {
            return (
                <Text
                    style={[styles.label, focused ? styles.activeLabel : styles.label]}
                >
                    {route.title}
                </Text>
            );
        }}
        pressColor={'transparent'}

    />

);


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
      <View style={styles.tabView}>
        <TabView
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          renderTabBar={renderTabBar}

        />
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
    height: Dimensions.get('window').height - 170,
  },
  label: {
    fontFamily: 'Klarna Text',
    fontSize: 20,
    fontWeight: '400',
    color: '#804F1E',
    
  },
  activeLabel: {
    fontFamily: 'Klarna Text',
    fontSize: 20,
    fontWeight: '600',
    color: '#FF5E00',
    // borderBottomWidth: 4,
    // borderColor: '#FF5E00',
    // height: 34,
  }
})