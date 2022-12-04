import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text,ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons'
import {useNavigation} from '@react-navigation/native'
import backgr from '../../../assets/images/arkaplan.png';
const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation()

  const onRegisterPressed = () => {
      navigation.navigate('ConfirmEmail')
  };

  const onSignInPress = () => {
      navigation.navigate('SignIn')
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ImageBackground source={backgr}  style={{flex:1}} >
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Hesap Oluştur</Text>
        <CustomInput
          placeholder="Kullanıcı Adı"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="E-Posta" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Şifre"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Şifre Tekrar"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Kayıt Ol" onPress={onRegisterPressed} />

        <Text style={styles.text}>
        Kaydolarak, kabul ettiğinizi onaylamış olursunuz.{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Kullanım Şartları
          </Text>{' '}
          ve{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
           Gizlilik Politikamızı
          </Text>
        </Text>

        <SocialSignInButtons /> 

        <CustomButton
          text="Zaten Bir Hesabınız Var Mı? Oturum Aç"
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

export default SignUpScreen;
