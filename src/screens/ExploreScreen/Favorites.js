import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import data from '../../../assets/Data/Favorites.json'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesStore'
import RestaurantCard from '../../components/RestaurantCard'

const Favorites = (props) => {
  const { goBack } = props
  const [isFavorite, setIsFavorite] = useState(false)
  /* API'den gelen favFacility bilgisine göre favori durumu güncellenmeli */
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.favoritesStore)
  console.log('init: ', initialState)

  const handleFavoriteButtonPress = (id, title, city, price, imgURL) => {
    isFavorite ? dispatch(removeFavorite({ id, title, city, price, imgURL })) : dispatch(addFavorite({ id, title, city, price, imgURL }));
    setIsFavorite(!isFavorite);
  }

  function isIdInInitialState(id) {
    return initialState.some(item => item.id === id);
  }

  const renderItem = ({ item }) => {
    const { imgURL, title, city, id, price } = item
    return (
      <RestaurantCard
        imgURL={imgURL}
        title={title}
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
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Favoriler</Text>
        <TouchableOpacity onPress={goBack} >
          <Icon name="home" size={30} style={{ color: 'rgb(212, 123, 51)' }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#E1E1E1',
          marginBottom: 12,
          alignItems: "center",
        }}
      />
      <FlatList
        data={initialState}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Favorites