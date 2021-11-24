import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GambarReact from '../assets/images/LogoReact';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Landing');
    }, 5000);
  }, []);
  return (
    <View style={{alignItems: 'center', backgroundColor: '#005690', flex: 1}}>
      <GambarReact width={180} height={180} style={{marginTop: 85}} />
      <Text style={styles.text}>e-wallet apps</Text>
      <Text
        style={{
          fontSize: 36,
          color: '#FFFFFF',
          marginTop: 52,
          textAlign: 'center',
        }}>
        Final Project
      </Text>
      <Text
        style={{
          fontSize: 36,
          color: '#FFFFFF',
          textAlign: 'center',
        }}>
        React Native
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: '#FFFFFF',
    marginTop: 52,
    textAlign: 'center',
  },
});
