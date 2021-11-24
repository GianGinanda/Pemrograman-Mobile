import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconTransfer from '../assets/icons/TFkirikanan.svg';

const TransaksiTemplate = props => {
  return (
    <View style={styles.container}>
      <IconTransfer width={25} height={25} />
      <View>
        <Text style={styles.text}>Rp. 800.000</Text>
        <Text style={styles.text}>Transfer to 082240206861</Text>
      </View>
      <Text style={styles.text}>20/08/2020</Text>
    </View>
  );
};

export default TransaksiTemplate;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevetion: 5,
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000',
  },
});
