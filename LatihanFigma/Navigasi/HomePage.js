import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import IconTopup from '../assets/icons/LogoPlus';
import IconQR from '../assets/icons/QRCode';
import IconTransfer from '../assets/icons/TFkiri';
import TransaksiTemplate from '../Template/TransaksiTemplate';

const HomePage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 12,
      }}>
      <View style={styles.saldo}>
        <Text style={[styles.saldo.text, {fontSize: 14, color: '#575757'}]}>
          Your Balance :
        </Text>
        <Text style={[styles.saldo.text, {fontSize: 34, color: '#575757'}]}>
          Rp. 1.234.567.000
        </Text>
      </View>
      <View style={styles.menu}>
        {/* Menu Top Up */}
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('TopUp');
          }}>
          <View>
            <View style={styles.menu.border}>
              <IconTopup width={30} height={30} />
            </View>
            <Text style={styles.menu.text}>Top Up</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* Menu QR Pay */}
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          <View>
            <View style={styles.menu.border}>
              <IconQR width={30} height={30} />
            </View>
            <Text style={styles.menu.text}>QR Pay</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* MENU TF */}
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Transfer');
          }}>
          <View>
            <View style={styles.menu.border}>
              <IconTransfer width={30} height={30} />
            </View>
            <Text style={styles.menu.text}>Transfer</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{marginTop: 10, color: '#575757'}}>
          5 Latest Transaction
        </Text>
        <ScrollView style={{height: '50%', marginTop: 10}}>
          <TransaksiTemplate />
          <TransaksiTemplate />
          <TransaksiTemplate />
          <TransaksiTemplate />
          <TransaksiTemplate />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  saldo: {
    alignItems: 'center',
    paddingVertical: 12,
    text: {
      width: '80%',
      fontWeight: '500',
    },
  },
  menu: {
    backgroundColor: '#4982C1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 4,
    text: {
      color: '#FFF',
      marginTop: 5,
      fontWeight: '500',
      fontSize: 14,
      textAlign: 'center',
    },
    border: {
      width: 48,
      height: 48,
      backgroundColor: '#FFF',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
