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
      <TextTemplate placeholder="Receiver Phone Number" />
      <TouchableOpacity
        style={styles.button.style}
        onPress={() => {
          navigation.navigate('TransferConfirmation');
        }}>
        <Text style={styles.button.text}>CHECK NUMBER</Text>
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
