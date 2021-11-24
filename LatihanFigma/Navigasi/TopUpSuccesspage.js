import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import GambarDompet from '../assets/icons/icondompet.svg';
const TopUpSuccesspage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 20,
      }}>
      <GambarDompet width={200} height={200} />
      <Text style={styles.textatas}>Top Up Complete</Text>
      <Text style={styles.textatas}>Rp. 60,000</Text>
      <View style={styles.pesan}>
        <Text style={styles.pesan.text}>21 Agustus 2021</Text>
      </View>
      <View style={styles.pesan}>
        <Text style={styles.pesan.text}>Via Mandiri</Text>
      </View>
      <TouchableOpacity
        style={styles.button.style}
        onPress={() => {
          navigation.navigate('TabBar');
        }}>
        <Text style={styles.button.text}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUpSuccesspage;

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
