import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import GambarCamera from '../assets/icons/kamera';

const PaymentPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('kamera');
          navigation.navigate('PaymentConfirmation');
        }}>
        <View style={styles.gambar}>
          <GambarCamera width={30} height={30} fill={'#000000'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  gambar: {
    width: 320,
    height: 320,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
