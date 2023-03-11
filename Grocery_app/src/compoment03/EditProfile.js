import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageIconArrow}
        source={require('../images/arrow.png')}
      />
      <Text style={styles.textCard}>Edit Profile</Text>
      <TextInput placeholder='  mati egh' style={styles.textInput}></TextInput>
      <View>
        <TextInput placeholder='                    +46 707 07 07' style={styles.textInput1}></TextInput>
        <Image
          style={styles.imageIconFlag}
          source={require('../images/flag.png')}
        />
        <Image
          style={styles.imageIconVector2}
          source={require('../images/vector2.png')}
        />
      </View>
      <Pressable style={styles.textNut}>
        <Text style={styles.textNut1}>Update Profile</Text>
      </Pressable>
    </View>
  );
};

export default EditProfile;

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
    marginTop: 55,
  },
  textInput: {
    height: 48,
    borderRadius: 5,
    backgroundColor:'#DCDCDC',
    marginTop: 40,
  },
  textInput1: {
    height: 48,
    borderRadius: 5,
    backgroundColor: '#DCDCDC',
    marginTop: 40,
  },
  textNut: {
    marginTop: 250,
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
  imageIconFlag: {
    position: 'absolute',
    marginTop: 50,
    marginLeft: 12,
  },
  imageIconVector2: {
    position: 'absolute',
    marginTop: 60,
    marginLeft: 57,
    width:10,
    height:5
  },
});
