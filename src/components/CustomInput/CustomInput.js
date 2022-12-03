import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './CustomInputStyle';

const App = ({
  value,
  setValue,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  type,
}) => {
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        inlineImageLeft="search_icon"
      />
    </View>
  );
};


export default App;
