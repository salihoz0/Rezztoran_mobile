import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import backgr from '../../../assets/images/arkaplan.png';


const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground source={backgr} style={styles.ImageBackground}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Şifreni Sıfırla</Text>
          <CustomInput placeholder="Kod" value={code} setValue={setCode} />
          <CustomInput
            placeholder="Yeni Şifrenizi Girin"
            value={newPassword}
            setValue={setNewPassword}
          />

          <CustomButton
            text="Onayla"
            onPress={onSubmitPressed}
            type="PRIMARY"
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
  ImageBackground:{flex:1},
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

export default NewPasswordScreen;
