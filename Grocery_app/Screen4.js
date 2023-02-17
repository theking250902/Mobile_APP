import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

const Screen4 = () => {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <Image style={styles.imageBack} source={require('./src/media/images/ic_back.png')} />
        <Text style={styles.text1}>Favorite</Text>
        <Text>   </Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 16 }}>

        <Image style={styles.imageItem} source={require('./src/media/images/apple.png')} />

        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>

          <Text style={styles.text2}>Red Apple</Text>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.imageCart} source={require('./src/media/images/cart.png')} />
            <Text style={styles.text3}>Add to cart</Text>
          </View>

        </View>

        <Text style={styles.text4}>$4,99 kg</Text>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 16 }}>

        <Image style={styles.imageItem} source={require('./src/media/images/salmon.png')} />

        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>

          <Text style={styles.text2}>Salmon</Text>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.imageCart} source={require('./src/media/images/cart.png')} />
            <Text style={styles.text3}>Add to cart</Text>
          </View>

        </View>

        <Text style={styles.text4}>$50 kg</Text>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 16 }}>

        <Image style={styles.imageItem} source={require('./src/media/images/avocado.png')} />

        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>

          <Text style={styles.text2}>Avocado Bowl</Text>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.imageCart} source={require('./src/media/images/cart.png')} />
            <Text style={styles.text3}>Add to cart</Text>
          </View>

        </View>

        <Text style={styles.text4}>$24 st</Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 26,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBack: {

  },
  imageItem: {
    width: 80,
    height: 68,
  },
  imageCart: {
    width: 17.53,
    height: 17.52,
    marginStart: 26,
    paddingBottom: 18,
  },
  text1: {
    marginTop: 28,
    color: '#FF5E00',
    fontFamily: 'Klarna Text',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.165,
  },
  text2: {
    width: 140,
    height: 40,
    marginStart: 26,
    marginTop: 10,
    color: '#6D3805',
    fontFamily: 'Klarna Text',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    width: 106,
    height: 40,
    marginStart: 6.72,
    color: '#FF5E00',
    fontFamily: 'Klarna Text',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text4: {
    width: 106,
    height: 40,
    marginTop: 48,
    marginEnd: 16,
    color: '#6D3805',
    fontFamily: 'Klarna Text',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'right',
  },
})

export default Screen4