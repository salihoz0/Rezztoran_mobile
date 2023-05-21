import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Header from '../../components/Header';

const ExitApp = props => {
  const {goBack} = props;

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header title="Çıkış Yap" firstIconName="home" onPress1={goBack} />
      <Text>ExitApp</Text>
    </SafeAreaView>
  );
};

export default ExitApp;
