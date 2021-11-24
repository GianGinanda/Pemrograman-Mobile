import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GambarTransfer from '../assets/icons/gambartransfer.svg';

const TransferSuccess = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
      }}>
      <GambarTransfer width={200} height={200} style={{marginBottom: 10}} />
      <View style={{marginBottom: 5}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#000',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          transfer Success!
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#000',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Rp. 100,000
        </Text>
      </View>
      <View style={styles.pesan}>
        <Text style={styles.pesan.text}>20 August 2020</Text>
        <Text style={styles.pesan.text}>Receiver : Dendy Aditya</Text>
        <Text style={styles.pesan.text}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <TouchableOpacity
        style={styles.button.style}
        onPress={() => {
          navigation.navigate('TabBar');
        }}>
        <Text style={styles.button.text}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransferSuccess;

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
