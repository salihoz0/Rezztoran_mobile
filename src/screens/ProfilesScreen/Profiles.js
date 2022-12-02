import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './Profiles.style';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';

const Profiles = () => {
  const navigation = useNavigation();

  const navigateToSingUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={backgr}>
        <Text style={styles.title}>Hesap</Text>
        <View style={styles.login}>
          <Text style={styles.loginText}>
            Rezervasyonları yönetmek ve yorum yapabilmek için giriş yapın
          </Text>
          <TouchableOpacity onPress={navigateToSingUp} style={styles.button}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profiles;
