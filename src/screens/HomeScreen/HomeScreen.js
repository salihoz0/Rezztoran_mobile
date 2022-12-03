import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CarouselComponent from '../../components/CarouselComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import mainPhoto from '../../../assets/images/mainMenuPhoto.png';
import Restaurants_data from '../../../assets/Data/Restorant_data.json';
import styles from './HomeScreen.style';
import SearchBar from '../../components/CustomSearchBar/CustomSearchBar';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import BlurLogo from '../../../assets/images/rezztoran_logo_blur.png';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.backgr} source={backgr}>
      <View style={styles.container}>
        <ImageBackground source={mainPhoto} style={styles.imageBackground}>
          <Text style={styles.title}>Keşfedin</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchedRest', {data: Restaurants_data});
            }}
            style={styles.button}
            activeOpacity={0.8}>
            <Icon name="silverware-fork-knife" size={20} />
            <Text style={styles.text}>Restoranlar</Text>
          </TouchableOpacity>
          <View style={styles.input}>
            <SearchBar />
          </View>
          <Text style={styles.offerText}>Şunlar hoşunuza gidebilir</Text>
        </ImageBackground>
        <CarouselComponent data={Restaurants_data} />
      </View>
      <Image
        source={BlurLogo}
        resizeMode={'contain'}
        style={styles.blur_logo}
      />
    </ImageBackground>
  );
};

export default HomeScreen;
