import React from 'react';
import {SafeAreaView, Linking} from 'react-native';
import Header from '../../components/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRMenu = props => {
  const {goBack} = props;
  const handleQRRead = data => {
    Linking.openURL(data.data);
  };
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header title="QR Menu" firstIconName="home" onPress1={goBack} />
      <QRCodeScanner
        onRead={handleQRRead}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
      />
    </SafeAreaView>
  );
};

export default QRMenu;
