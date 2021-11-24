import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GambarReact from '../assets/images/LogoReact';
import TextTemplate from '../Template/TextTemplate';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.gambar}>
        <GambarReact width={92.63} height={92.63} />
      </View>
      <Text style={styles.text}>e-wallet</Text>
      <TextTemplate placeholder="Email" />
      <TextTemplate placeholder="Password" />
      <TouchableOpacity
        style={styles.button.style}
        onPress={() => {
          navigation.navigate('TabBar');
        }}>
        <Text style={styles.button.text}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 20, color: '#000', fontSize: 14, fontWeight: '400'}}
        onPress={() => {
          navigation.navigate('Regis');
        }}>
        <Text style={{fontSize: 14, color: '#4E4E4E'}}>Registrasi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  gambar: {
    backgroundColor: '#005690',
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 69,
    marginHorizontal: 112,
  },
  text: {
    fontSize: 24,
    color: '#4982C1',
    marginVertical: 23,
    textAlign: 'center',
  },
  button: {
    style: {
      width: 280,
      backgroundColor: '#4982C1',
      borderRadius: 4,
      paddingVertical: 10,
      marginTop: 30,
      alignItems: 'center',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});
