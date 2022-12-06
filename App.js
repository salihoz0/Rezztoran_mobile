import React,{useEffect} from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Navigation from './src/navigation'
import RNBootSplash from "react-native-bootsplash";
 
const App = () => {
  useEffect(()=> {
    RNBootSplash.hide();
  },[]);
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
