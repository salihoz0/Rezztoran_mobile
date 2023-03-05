import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Favorites from './Favorites';
import SearchEngine from './SearchEngine';
import data from '../../../assets/Data/Restorant_data.json';
// import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarComponent from '../../components/StarComponent/StarComponent';
import { TextInput } from 'react-native-paper';
import SearchInput from './SearchInput';
import RestorantDetail from '../../screens/RestorantDetailScreen/RestorantDetailScreen'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesStore'

const ExploreScreen = () => {
  const [page, setPage] = useState(0);
  // const navigation = useNavigation();
  const [resDetailData, setResDetailData] = useState({
    title: undefined,
    star: undefined,
    price: undefined,
  })

  const [isFavorite, setIsFavorite] = useState(false)
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

  const detailHandler = (imgURL, title, city, star, price, id) => {
    setResDetailData({ imgURL, title, city, star, price, id })
    setPage(4)
  }

  const goBack = () => {
    setPage(0);
  };

  const Discover = () => {
    return (
      <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Keşfet</Text>
          <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => setPage(2)}>
              <Icon name="filter" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPage(1)}>
              <Icon name="heart" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => setPage(3)}>
          <TextInput
            style={{ marginHorizontal: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)' }}
            label='Restoran ara'
            editable={false}
          />
        </TouchableOpacity>
        <View style={{ margin: 10 }}>
          <Text style={{ fontFamily: 'Poppins-Medium', marginHorizontal: 10, color: 'black', fontSize: 15, marginTop: 5 }}>Şehire Göre</Text>
          <FlatList
            horizontal
            removeClippedSubviews={false}
            scrollEventThrottle={5}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              const { imgURL, title, city, star, price, id } = item
              return (
                <View
                  style={{
                    marginHorizontal: 5,
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: 'rgb(217, 213, 169)',
                    borderRadius: 10,
                    backgroundColor: 'rgb(242, 238, 220)',
                  }}>
                  <FastImage
                    style={{ width: 170, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{
                      uri: `${imgURL}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#000000', fontFamily: 'Poppins-Medium', margin: 10, maxWidth: 160 }}>{title}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 5, marginBottom: 5 }}>
                    <Text style={{ color: '#000000', fontFamily: 'Poppins-light', marginLeft: 10 }}>{city}</Text>
                    <TouchableOpacity onPress={() => { detailHandler(imgURL, title, city, star, price, id) }}>
                      <Icon name="calendar-arrow-right" size={30} style={{ color: 'rgb(237, 176, 7)' }} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
          <Text style={{ paddingTop: 10, paddingLeft: 10, fontFamily: 'Poppins-Medium', fontSize: 15, color: '#000000', paddingBottom: 10 }}>Önerilenler</Text>
          <FlatList
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            removeClippedSubviews={false}
            renderItem={({ item }) => {
              const { imgURL, title, city, star, price, id } = item
              return (
                <TouchableOpacity style={{ width: 170, height: 170, marginHorizontal: 10, borderColor: 'rgb(217, 213, 169)', borderWidth: 1, backgroundColor: 'rgb(242, 238, 220)', borderRadius: 10 }} onPress={() => { detailHandler(imgURL, title, city, star, price, id) }}>
                  <FastImage
                    style={{ width: 170, height: 100, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                    source={{
                      uri: `${imgURL}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text numberOfLines={1} ellipsizeMode="tail" variant="titleLarge" style={{ fontFamily: 'Poppins-Regular', color: '#000000', fontSize: 15, marginLeft: 10 }}>{title}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 10 }}>
                    <StarComponent count={star} select={'star'} />
                    <StarComponent count={price} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView >
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {page === 0 && <Discover />}
      {page === 1 && <Favorites goBack={goBack} />}
      {page === 2 && <SearchEngine goBack={goBack} />}
      {page === 3 && <SearchInput goBack={goBack} data={data} />}
      {page === 4 && <RestorantDetail goBack={goBack} data={resDetailData} handleFavoriteButtonPress={handleFavoriteButtonPress} isIdInInitialState={isIdInInitialState} />}
    </View>
  );
};

export default ExploreScreen;
