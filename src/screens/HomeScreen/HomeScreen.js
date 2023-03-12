import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import mainPhoto from '../../../assets/images/mainMenuPhoto.png';
import styles from './HomeScreen.style';
import { useNavigation } from '@react-navigation/native';
import Carousel from '../../components/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesStore'
import { useGetRestaurant } from '../../api/restaurant';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.favoritesStore)
  console.log('init: ', initialState)
  const { data: restaurant } = useGetRestaurant()

  const handleFavoriteButtonPress = (id, restaurantName, city, price, restaurantImage) => {
    isFavorite ? dispatch(removeFavorite({ id, restaurantName, city, price, restaurantImage })) : dispatch(addFavorite({ id, restaurantName, city, price, restaurantImage }));
    setIsFavorite(!isFavorite);
  }

  function isIdInInitialState(id) {
    return initialState.some(item => item.id === id);
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <ImageBackground source={mainPhoto} style={styles.imageBackground}>
          <Text style={styles.title}>Keşfedin</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TabNavigation', { screen: "Keşfet" });
            }}
            style={styles.button}
            activeOpacity={0.8}>
            <Icon name="silverware-fork-knife" size={20} color={'#000000'} style={{ marginRight: 10 }} />
            <Text style={styles.text}>Restoranlar</Text>
          </TouchableOpacity>
          <Text style={styles.offerText}>Şunlar hoşunuza gidebilir</Text>
        </ImageBackground>
        <Carousel data={restaurant} handleFavoriteButtonPress={handleFavoriteButtonPress} isIdInInitialState={isIdInInitialState} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


//Bu sayfada SearchBar'a gerek olmadığını düşünüyorum.
/*
Sorunlar
- Restoran sliderına tıklayınca detay sayfasına götürsün
*/