import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ListMyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <Image
          style={styles.imageIconArrow}
          source={require('./images/arrow.png')}
        />
        <Image source={require('./images/group.png')} />
      </View>
      <Text style={styles.textCard}>MyCard</Text>
      <View style={styles.textViewTong}>
        <Image source={require('./images/group2.png')} />
        <Text style={styles.textMyCard}>My Card</Text>
        <Text style={styles.textCardNumber}>5342 **** **** 6745</Text>
        <Image
          style={{marginLeft: 100}}
          source={require('./images/vector4.png')}
        />
      </View>
      <Image
        style={{marginTop: 12.55, marginLeft: -30}}
        source={require('./images/line.png')}
      />
      <View style={styles.textViewTong}>
        <Image source={require('./images/group2.png')} />
        <Text style={styles.textMyCard}>My Card</Text>
        <Text style={styles.textCardNumber}>5342 **** **** 6745</Text>
        <Image
          style={{marginLeft: 100}}
          source={require('./images/vector4.png')}
        />
      </View>
      <Image
        style={{marginTop: 12.55, marginLeft: -30}}
        source={require('./images/line.png')}
      />
    </View>
  );
};

export default ListMyCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginStart: 24,
    marginEnd: 24,
  },
  headerIcon: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCard: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28.8,
    textAlign: 'center',
    color: '#FF5E00',
    marginTop: 60.51,
  },
  imageIconArrow: {
    justifyContent: 'flex-end',
  },
  textMyCard: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#6D3805',
    marginLeft: 19.54,
    marginTop: 8,
  },
  textCardNumber: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    marginTop: 37,
    marginLeft: -65,
  },
  textViewTong: {
    flexDirection: 'row',
    marginTop: 58.54,
  },
});
