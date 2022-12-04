import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Logo from '../../../assets/images/rezztoran_logo_transparent.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import backgr from '../../../assets/images/arkaplan.png';
const SignInScreen = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const navigation = useNavigation()

  const onSignInPressed = () => {
    navigation.navigate('HomeScreen')
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp')
  };

  return (
   
    <ImageBackground source={backgr} style={{flex:1}} >
    <ScrollView showsVerticalScrollIndicator={false} >
      
      <View style={styles.root}>
      
        <Image
          source={Logo}
          style={(styles.logo, { height: height * 0.3 })}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Kullanıcı Adı"
          value={username}
          setValue={setUsername}
        
        />
        <CustomInput
          placeholder="Şifre"
          value={password}
          setValue={setPassword}
          secureTextEntry
          style={{width:500}}
        />
        <CustomButton text="Giriş Yap" onPress={onSignInPressed} />
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
