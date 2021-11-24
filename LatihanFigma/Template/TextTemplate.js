import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const TextTemplate = props => {
  const [value, setValue] = useState();
  return (
    <View style={styles.border}>
      <TextInput
        placeholder={props.placeholder || ''}
        keyboardType={props.type}
        onChangeText={() => {
          setValue;
        }}
        value={value}
      />
    </View>
  );
};

export default TextTemplate;

const styles = StyleSheet.create({
  border: {
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 4,
    paddingHorizontal: 5,
    alignSelf: 'center',
    marginVertical: 7,
  },
});
