import React, {useState} from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CarouselComponent from '../../components/CarouselComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import mainPhoto from '../../../assets/images/mainMenuPhoto.png';
import Restaurants_data from '../../../assets/Data/Restorant_data.json';
import styles from './HomeScreen.style';
import SearchBar from '../../components/CustomSearchBar/CustomSearchBar';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={backgr}>
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
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
