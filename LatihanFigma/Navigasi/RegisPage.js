import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import TextTemplate from '../Template/TextTemplate';

const RegisPage = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: 95}}>
        <TextTemplate placeholder="Email" />
      </View>
      <View style={{marginTop: 15}}>
        <TextTemplate placeholder="Password" />
      </View>
      <View style={{marginTop: 15}}>
        <TextTemplate placeholder="Nama" />
      </View>
      <View style={{marginTop: 15}}>
        <TextTemplate placeholder="Nomor Handphone" />
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

export default RegisPage;

const styles = StyleSheet.create({
  button: {
    style: {
      width: 280,
      backgroundColor: '#4982C1',
      borderRadius: 4,
      paddingVertical: 10,
      marginTop: 30,
      alignSelf: 'center',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});
