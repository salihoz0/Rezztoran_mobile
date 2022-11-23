import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '../../components/CustomInput';
import backgr from '../../../assets/images/arkaplan.png';
import Logo_2 from '../../../assets/images/Logo_2.png';
import CustomRestorant from '../../components/CustomRestorant/CustomRestorant';
import { SafeAreaView } from 'react-native-safe-area-context';
import heart_icon from '../../../assets/images/heart-icon.png';
import star_icon from '../../../assets/images/star-icon.png';
import SignUpScreen from '../SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';

const LandingScreen = () => {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [star, setStar] = useState('');
  const [icon, seticon] = useState();
  const navigation = useNavigation();
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  const onPressHome = () => {
    navigation.navigate('HomeScreen');
  };

  return ( 
    <ImageBackground source={backgr} style={styles.backgr}>
      <SafeAreaView style={{ height: '100%' }}>

        <View style={styles.top}>
          <Text style={styles.header} onPress={onPressHome}>
            REZZTORAN
          </Text>
          <View
            style={{ width: '12%', alignItems: 'flex-end', paddingRight: 3 }}>
            <Ionicons
              name="person"
              onPress={onSignInPress}
              size={25}
              style={styles.icon}
            />
          </View>
        </View>

        <View
          style={{
            height: '35%',
            flexDirection: 'row',
            alignItems: 'center',
            height: 100,
          }}>
          <Image source={Logo_2} style={styles.logo} resizeMode="contain" />
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>
            Diledigin Restorani Sec!
          </Text>
        </View>

        <View style={{ height: '15%' }}>
          <View style={styles.searchRest}>
            <CustomInput
              value={search}
              setValue={setSearch}
              placeholder="Sehir, restorant, Mutfak ara..."
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.starAndDateTime}>
            <CustomInput
              value={star}
              setValue={setStar}
              placeholderTextColor="black"
              placeholder="Yıldız"
              type="STAR"
            />
          </View>
        </View>

        <CustomRestorant text={'En Cok Sevilenler'} icon={heart_icon} />
        <CustomRestorant text={'En Populerler'} icon={star_icon} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {},
  iconView: {
    alignItems: 'flex-end',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  icon: {
    borderRadius: 50,
    width: 35,
    height: 35,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignItems: 'flex-end',
  },
  starAndDateTime: {
    flexDirection: 'row',
  },
  searchRest: {},
  text: {
    fontSize: 20,
  },
  backgr: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    color: 'orange',
    paddingLeft: 10,
  },
  text: {
    width: '22%',
  },
  backgr: {
    flex: 1,
  },
  header: {
    color: 'orange',
    paddingLeft: 2,
    width: '25%',
    fontWeight: 'bold',
  },
  top: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  logo: {
    width: '30%',
    maxWidth: 200,
    maxHeight: 200,
  },
});

export default LandingScreen;
