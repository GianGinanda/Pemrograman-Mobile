import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import TransaksiTemplate from '../Template/TransaksiTemplate';

const TransaksiHistoryPage = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Text style={{marginTop: 30, marginBottom: 10}}>Latest Transaction</Text>
      <ScrollView style={{}}>
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
        <TransaksiTemplate />
      </ScrollView>
    </View>
  );
};

export default TransaksiHistoryPage;

const styles = StyleSheet.create({});
