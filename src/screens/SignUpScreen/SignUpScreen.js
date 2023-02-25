import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text,ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons'
import {useNavigation} from '@react-navigation/native'
import backgr from '../../../assets/images/arkaplan.png';
import { useRegister } from '../../api/auth';
import * as Keychain from 'react-native-keychain'

const SignUpScreen = () => {
  const {mutate: register} = useRegister()
  const [registerValues, setRegisterValues] = useState({
      username: "",
      mail: "",
      password: "",
      name: "",
      surname: ""
  })

  const doRegister = async (credientals={username, mail, password, name, surname}) => {
    console.log(credientals)
    new Promise((resolve, reject) => {
      register(registerValues,{
        onSuccess: data => {
          resolve(undefined)
          Keychain.setGenericPassword(registerValues.username, registerValues.password)
          navigation.navigate('ConfirmEmail')
          setRegisterValues({
            username: "",
            mail: "",
            password: "",
            name: "",
            surname: ""
          })
          console.log('başarılı');
        },
        onError: () => {
          reject
          console.log('istek başarısız')
        }
      })
    },)
  };

  const navigation = useNavigation()

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
          value={registerValues.username}
          setValue={(val) => setRegisterValues({...registerValues, username: val})}
        />
        <CustomInput 
          placeholder="E-Posta" 
          value={registerValues.mail} 
          setValue={(val) => setRegisterValues({...registerValues, mail: val})} />
        <CustomInput
          placeholder="Şifre"
          value={registerValues.password}
          setValue={(val) => setRegisterValues({...registerValues, password: val})}
          secureTextEntry
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%'}}>
        <CustomInput
          placeholder="Ad"
          value={registerValues.name}
          setValue={(val) => setRegisterValues({...registerValues, name: val})}
          type='REGISTER'
        />
        <CustomInput
          placeholder="Soyad"
          value={registerValues.surname}
          setValue={(val) => setRegisterValues({...registerValues, surname: val})}
          type='REGISTER'
        />
        </View>
        <CustomButton text="Kayıt Ol" onPress={() => {doRegister({username:registerValues.username , mail:registerValues.mail, password:registerValues.password, name:registerValues.name, surname:registerValues.surname})}} />

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
