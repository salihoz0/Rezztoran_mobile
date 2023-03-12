import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import data from '../../../assets/Data/Favorites.json'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesStore'
import RestaurantCard from '../../components/RestaurantCard'
import Header from '../../components/Header';

const Favorites = (props) => {
  const { goBack } = props
  const [isFavorite, setIsFavorite] = useState(false)
  /* API'den gelen favFacility bilgisine göre favori durumu güncellenmeli */
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.favoritesStore)
  console.log('init: ', initialState)

  const handleFavoriteButtonPress = (id, restaurantName, city, price, restaurantImage) => {
    isFavorite ? dispatch(removeFavorite({ id, restaurantName, city, price, restaurantImage })) : dispatch(addFavorite({ id, restaurantName, city, price, restaurantImage }));
    setIsFavorite(!isFavorite);
  }

  function isIdInInitialState(id) {
    return initialState.some(item => item.id === id);
  }

  const renderItem = ({ item }) => {
    const { restaurantImage, restaurantName, city, id, price } = item
    return (
      <RestaurantCard
        imgURL={restaurantImage}
        title={restaurantName}
        city={city}
        id={id}
        price={price}
        isIdInInitialState={isIdInInitialState}
        handleFavoriteButtonPress={handleFavoriteButtonPress}
      />
    )
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Header title='Favoriler' firstIconName='home' onPress1={goBack} />
      <FlatList
        data={initialState}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Favorites