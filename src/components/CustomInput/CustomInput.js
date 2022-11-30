import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

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
  container_PRICE: {
    backgroundColor: 'white',
    width: '30%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginLeft: 60,
  },
  container_MAINMENUINPUT: {
    backgroundColor: 'white',
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginLeft: 50,
    marginTop: 30,
  },
});
export default App;
