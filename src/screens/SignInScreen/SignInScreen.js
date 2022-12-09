import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import backgr from '../../../assets/images/arkaplan.png';
import {login} from '../../store/auth';
import {loginUser} from '../../api/apiCalls';
import {useSelector, useDispatch} from 'react-redux';

const SignInScreen = () => {
  const dispatch = useDispatch();

  const [credientals, setCredientals] = useState({
    username: '',
    password: '',
  });

  const doLogin = e => {
    console.log(credientals);
    loginUser(credientals)
      .then(x => {
        const data = x.data;
        console.log('istek attim');
        console.log(data);
        dispatch(
          login({
            myToken: data.accessToken,
            myDetails: data.user,
          }),
        );
        navigation.navigate('HomeScreen');
      })
      .catch(e => {
        Alert.alert('HATA', e.response.data.error);
        console.log(e.e.response.data.error);
        console.log('hata');
      });
  };

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground source={backgr} style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={(styles.logo, {height: height * 0.3})}
            resizeMode="contain"
          />
          <CustomInput
            placeholder="Kullanıcı Adı"
            value={credientals.username}
            setValue={val => setCredientals({...credientals, username: val})}
          />
          <CustomInput
            placeholder="Şifre"
            value={credientals.password}
            setValue={val => setCredientals({...credientals, password: val})}
            secureTextEntry
            style={{width: 500}}
          />
          <CustomButton text="Giriş Yap" onPress={doLogin} />
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
