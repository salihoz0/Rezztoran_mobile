import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/rezztoran_logo_transparent.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import backgr from '../../../assets/images/arkaplan.png';
import { useDispatch } from 'react-redux';
import { useLogin } from '../../api/auth';
import { setAuth } from '../../store/authStore';
import * as Keychain from 'react-native-keychain'

const SignInScreen = () => {
  const dispatch = useDispatch();
  const { mutate: login } = useLogin()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const doLogin = async (values = { username, password }) => {
    new Promise((resolve, reject) => {
      login(values, {
        onSuccess: data => {
          resolve(undefined)
          dispatch(
            setAuth({
              myToken: data.accessToken,
              myDetails: data.user,
            })
          )
          Keychain.setGenericPassword(values.username, values.password)
          setUsername('')
          setPassword('')
          console.log('başarılı')
        },
        onError: () => {
          reject
          console.log('istek başarısız')
        }
      })
    },)
  };

  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground source={backgr} style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={(styles.logo, { height: height * 0.3 })}
            resizeMode="contain"
          />
          <CustomInput
            placeholder="Kullanıcı Adı"
            value={username}
            setValue={val => setUsername(val)}
          />
          <CustomInput
            placeholder="Şifre"
            value={password}
            setValue={val => setPassword(val)}
            secureTextEntry
            style={{ width: 500 }}
          />
          <CustomButton text="Giriş Yap" onPress={() => doLogin({ username: username, password: password })} />
          <CustomButton
            text="Şifremi Unuttum"
            onPress={onForgotPasswordPressed}
          />

          <SocialSignInButton />

          <CustomButton
            text="Hesabınız yok mu? Bir tane oluşturun"
            onPress={onSignUpPress}
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
  logo: {
    width: '34%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
