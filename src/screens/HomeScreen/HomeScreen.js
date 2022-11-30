import React, {useState} from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CarouselComponent from '../../components/CarouselComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import mainPhoto from '../../../assets/images/mainMenuPhoto.png';
import Restaurants_data from '../../../assets/Data/Restorant_data.json';
import styles from './HomeScreen.style';
import SearchBar from '../../components/CustomSearchBar/CustomSearchBar'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={mainPhoto} style={styles.imageBackground}>
        <Text style={styles.title}>Keşfedin</Text>
        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={20} />
          <Text style={styles.text}>Restoranlar</Text>
        </TouchableOpacity>
        <View style={styles.input}>
         <SearchBar/>
        </View>
        <Text style={styles.offerText}>ŞUNLAR HOŞUNUZA GİDEBİLİR</Text>
      </ImageBackground>
      <CarouselComponent
        data={Restaurants_data}
        icon="star"
        iconColor="yellow"
        title="En Populerler"
      />
    </View>
  );
};

export default HomeScreen;
// Icon componentinde Utensils ikonu olmadı */
// CustomInput'ta yeni style oluşturdum icon componenti customInputta yoktu o yüzden search koymadım ihtimal dahilinde konulur
