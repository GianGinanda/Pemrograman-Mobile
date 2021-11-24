import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GambarPayment from '../assets/icons/payment.svg';

const PaymentConfirmation = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
      }}>
      <GambarPayment width={200} height={200} style={{marginBottom: 10}} />
      <View style={{marginBottom: 5}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#000',
            textAlign: 'center',
          }}>
          Rp. 60,000
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          height: 0,
          width: 280,
          borderColor: '#B2B2B2',
          marginBottom: 20,
        }}></View>
      <View style={styles.pesan}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#FFF',
            marginVertical: 5,
          }}>
          Payment to
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#FFF',
            marginVertical: 5,
          }}>
          Basicschool
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#FFF',
            marginVertical: 5,
          }}>
          Jl. Ciparay No 20B, Kota Bandung
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button.style}
        onPress={() => {
          navigation.navigate('PaymentSuccess');
        }}>
        <Text style={styles.button.text}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentConfirmation;

const styles = StyleSheet.create({
  textatas: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
  },
  pesan: {
    width: '100%',
    backgroundColor: '#4982C1',
    alignItems: 'center',
    paddingVertical: 15,
    text: {
      fontSize: 18,
      fontWeight: '400',
      color: '#FFF',
      marginVertical: 5,
    },
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
