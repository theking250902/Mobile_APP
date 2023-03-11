import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const NewCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageIconArrow}
        source={require('../images/arrow.png')}
      />
      <Text style={styles.textCard}>New Card</Text>
      <View style={styles.textInput2}>
        <Text style={styles.textNumber}>Card number</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.textNumber}>Expiry Date</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.textNumber}>CCV</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <Pressable style={styles.textNut}>
        <Text style={styles.textNut1}>Add Card</Text>
      </Pressable>
    </View>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginStart: 24,
    marginEnd: 24,
  },
  imageIconArrow: {
    marginLeft: 10,
    marginTop: 23,
  },
  textCard: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28.8,
    textAlign: 'center',
    color: '#FF5E00',
    marginTop: 60.51,
  },
  textInput: {
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
  },
  textNut: {
    marginTop: 180,
    height: 50,
    borderRadius: 22,
    backgroundColor: '#FF5E00',
  },
  textNut1: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 14,
  },
  textInput2: {
    marginTop: 46,
  },
  textNumber: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#6D3805',
  },
});
