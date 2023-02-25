import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Navigation from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
