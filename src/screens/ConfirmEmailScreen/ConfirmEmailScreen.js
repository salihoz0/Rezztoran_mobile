import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text,ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'
import backgr from '../../../assets/images/arkaplan.png'
const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation()

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen')
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  };

  const onResendPress = () => {
    console.warn('onResendPressed');
  };

  return (
    <ImageBackground source={backgr} style={{flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>E-Postanı Doğrula</Text>
        <CustomInput placeholder="Doğrulama kodunu girin" value={code} setValue={setCode} />

        <CustomButton text="Doğrula" onPress={onConfirmPressed} />

        <CustomButton
          text="Tekrar Gönder"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Giriş Sayfasına Dön"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
