import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GambarTransfer from '../assets/icons/gambartransfer.svg';
import TextTemplate from '../Template/TextTemplate';

const TransferPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: '#FFF',
      }}>
      <GambarTransfer width={240} height={200} style={{marginBottom: 30}} />
      <TextTemplate placeholder="Nominal Transfer" />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          color: '#000000',
          marginVertical: 5,
        }}>
        Receiver :
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
          color: '#000000',
          marginVertical: 5,
        }}>
        Dendy Aditya
      </Text>
      <TouchableOpacity
        style={styles.button.style}
        onPress={() => {
          navigation.navigate('TransferSuccess');
        }}>
        <Text style={styles.button.text}>KIRIM</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransferPage;

const styles = StyleSheet.create({
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
