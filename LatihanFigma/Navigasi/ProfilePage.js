import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ProfilePage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#005690',
          alignItems: 'center',
          paddingVertical: 30,
          marginBottom: 20,
        }}>
        <Image
          source={require('../assets/images/gambarprofile.png')}
          style={styles.gambar}
        />
        <Text style={styles.text}>Gian Ginanda Pratiwi</Text>
        <Text style={styles.text}>082262387256</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button.style}>
          <Text style={styles.button.text}>CHANGE PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button.style}>
          <Text style={styles.button.text}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button.style}
          onPress={() => {
            navigation.navigate('Landing');
          }}>
          <Text style={styles.button.text}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  gambar: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
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
