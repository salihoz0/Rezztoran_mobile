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
import data from '../../../assets/Data/Restorant_data.json';

const HomeScreen = () => {
  const navigation = useNavigation();
  // const [data, setData] = useState()
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.favoritesStore)
  console.log('init: ', initialState)

  const handleFavoriteButtonPress = (id) => {
    isFavorite ? dispatch(removeFavorite({ id })) : dispatch(addFavorite({ id }));
    setIsFavorite(!isFavorite);
  }

  function isIdInInitialState(id) {
    return initialState.some(item => item.id === id);
  }

  // useEffect(() => {
  //   const getRestaurant = async () => {
  //     await axios.get("http://192.168.1.40:8080/api/restaurant").then(function (response) {
  //       setData(response.data)
  //     }).catch(function () {
  //       console.log('hata')
  //     })

  //   }
  //   getRestaurant()
  // }, [])

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <ImageBackground source={mainPhoto} style={styles.imageBackground}>
          <Text style={styles.title}>Keşfedin</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TabNavigation', { screen: "Ara" });
            }}
            style={styles.button}
            activeOpacity={0.8}>
            <Icon name="silverware-fork-knife" size={20} color={'#000000'} style={{ marginRight: 10 }} />
            <Text style={styles.text}>Restoranlar</Text>
          </TouchableOpacity>
          <Text style={styles.offerText}>Şunlar hoşunuza gidebilir</Text>
        </ImageBackground>
        <Carousel data={data} handleFavoriteButtonPress={handleFavoriteButtonPress} isIdInInitialState={isIdInInitialState} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


//Bu sayfada SearchBar'a gerek olmadığını düşünüyorum.