import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground,Image} from 'react-native';
import styles from './Profiles.style';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import BlurLogo from '../../../assets/images/rezztoran_logo_blur.png';

const Profiles = () => {
  const navigation = useNavigation();

  const navigateToSingIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={backgr}>
        <Text style={styles.title}>Hesap</Text>
        <View style={styles.login}>
          <Text style={styles.loginText}>
            Rezervasyonları yönetmek ve yorum yapabilmek için giriş yapın
          </Text>
          <TouchableOpacity onPress={navigateToSingIn} style={styles.button}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Image source={BlurLogo} resizeMode={'contain'} style={styles.blur_logo} />

    </View>
  );
};

export default Profiles;
