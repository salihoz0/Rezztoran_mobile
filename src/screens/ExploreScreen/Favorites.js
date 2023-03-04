import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import data from '../../../assets/Data/Favorites.json'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesStore'


const Favorites = (props) => {
  const { goBack } = props
  const [isFavorite, setIsFavorite] = useState(false)
  /* API'den gelen favFacility bilgisine göre favori durumu güncellenmeli */
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

  const renderItem = ({ item }) => {
    const { imgURL, title, city, id, price } = item
    return (
      <View>
        <View style={{ borderWidth: 1, borderColor: 'rgb(217, 213, 169)', flexDirection: 'row', paddingVertical: 5, marginHorizontal: 5, marginVertical: 7, borderRadius: 10 }}>
          <FastImage
            style={{ width: 100, height: 100, marginLeft: 5, borderRadius: 5 }}
            source={{
              uri: `${imgURL}`,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: 'black', marginTop: 10 }}>{title}</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }} >{city}</Text>
            <Text style={{ backgroundColor: 'rgb(237, 176, 7)', width: 70, paddingVertical: 5, paddingLeft: 5, borderRadius: 10, marginTop: 10, color: 'black' }}>₺ {price}</Text>
          </View>
          <TouchableOpacity style={{ width: 70, height: 40, position: 'absolute', right: 0, alignItems: 'center', marginTop: 10 }} onPress={() => { handleFavoriteButtonPress(id) }}>
            {
              isIdInInitialState(id) ? <Icon name="heart" size={25} style={{ color: 'rgb(237, 176, 7)' }} /> : <Icon name="heart-outline" size={25} style={{ color: 'rgb(237, 176, 7)' }} />
            }
          </TouchableOpacity>
        </View>
      </View>
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
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Favorites