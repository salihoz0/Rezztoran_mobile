import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import store from './src/store';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
      </PaperProvider>
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
