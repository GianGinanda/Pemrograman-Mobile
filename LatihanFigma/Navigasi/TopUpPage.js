import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IconTopUp from '../assets/icons/icondompet.svg';
import TextTemplate from '../Template/TextTemplate';

const TopUpPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 50,
      }}>
      <IconTopUp width={200} height={200} style={{marginBottom: 30}} />
      <TextTemplate placeholder="Nominal Top Up" type="numeric" />
      <TouchableOpacity
        style={styles.button.style}
        onPress={() => {
          navigation.navigate('TopUpsuccessPage');
        }}>
        <Text style={styles.button.text}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUpPage;

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
