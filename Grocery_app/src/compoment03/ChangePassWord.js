import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ChangePassWord = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageIconArrow}
        source={require('../image/Arrow.png')}
      />
      <Text style={styles.textPassword}>Change Password</Text>
      <View>
        <TextInput style={styles.textInput}></TextInput>
        <Image
          style={styles.imageIconPadlock}
          source={require('../images/vector.png')}
        />
        <Image
          style={styles.imageIconEye}
          source={require('../images/visibility.png')}
        />
      </View>
      <View>
        <TextInput style={styles.textInput1}></TextInput>
        <Image
          style={styles.imageIconPadlock1}
          source={require('../images/vector.png')}
        />
        <Image
          style={styles.imageIconEye1}
          source={require('../images/visibility.png')}
        />
      </View>
      <View>
        <TextInput style={styles.textInput2}></TextInput>
        <Image
          style={styles.imageIconPadlock2}
          source={require('../images/vector.png')}
        />
        <Image
          style={styles.imageIconEye2}
          source={require('../images/visibility.png')}
        />
      </View>
      <Pressable style={styles.textNut}>
        <Text style={styles.textNut1}>Confirm</Text>
      </Pressable>
      <Pressable style={styles.textNut2}>
        <Text style={styles.textNut3}>Back To Sign In</Text>
      </Pressable>
    </View>
  );
};

export default ChangePassWord;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingStart: 24,
    paddingEnd: 24,
    backgroundColor:'#FFFFFF',
    flex:1
  },
  textPassword: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28.8,
    textAlign: 'center',
    color: '#FF5E00',
    marginTop: 60.51,
  },
  textInput: {
    height: 48,
    
    borderRadius: 5,
    marginTop: 51,
    backgroundColor: '#F3F3F3',
  },
  imageIconArrow: {
    marginLeft: 10,
    marginTop: 23,
  },
  imageIconPadlock: {
    position: 'absolute',
    marginTop: 65,
    marginLeft: 12,
  },
  imageIconEye: {
    position: 'absolute',
    marginTop: 66,
    marginLeft: 280,
  },
  textInput1: {
    height: 48,
   
    borderRadius: 5,
    marginTop: 43,
    backgroundColor: '#F3F3F3',
  },
  textInput2: {
    height: 48,
  
    borderRadius: 5,
    marginTop: 8,
    backgroundColor: '#F3F3F3',
  },
  imageIconPadlock1: {
    position: 'absolute',
    marginTop: 58,
    marginLeft: 12,
  },
  imageIconEye1: {
    position: 'absolute',
    marginTop: 58,
    marginLeft: 280,
  },
  imageIconPadlock2: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 12,
  },
  imageIconEye2: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 280,
  },
  textNut: {
    marginTop: 150,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FF5E00',
  },
  textNut1: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 14,
  },
  textNut2: {
    height: 48,
    marginTop: 20,
    backgroundColor: '#FFF',
    borderWidth:1,
    borderColor:'orange',borderRadius:99
  },
  textNut3: {
    color: '#FF5E00',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    top:10
   
  

   
  },
});
