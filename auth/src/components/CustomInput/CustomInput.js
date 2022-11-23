import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const App = ({ value, setValue, placeholder,placeholderTextColor, secureTextEntry, type }) => {
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 40,
  },
  container_CALENDAR: {
    backgroundColor: 'white',
    width: '40%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  container_STAR: {
    backgroundColor: 'white',
    width: '20%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
})
export default App;

