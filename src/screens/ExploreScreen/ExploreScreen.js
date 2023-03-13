import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Favorites from './Favorites';
import SearchEngine from './SearchEngine';
// import data from '../../../assets/Data/Restorant_data.json';
// import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarComponent from '../../components/StarComponent/StarComponent';
import { TextInput } from 'react-native-paper';
import SearchInput from './SearchInput';
import RestorantDetail from '../../screens/RestorantDetailScreen/RestorantDetailScreen'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesStore'
import Header from '../../components/Header';
import { useGetRestaurant } from '../../api/restaurant';
import { useGetCategory } from '../../api/category'

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
  const { data: restaurant } = useGetRestaurant()
  const { data: category } = useGetCategory()


  const handleFavoriteButtonPress = (id, restaurantName, city, price, restaurantImage) => {
    isFavorite ? dispatch(removeFavorite({ id, restaurantName, city, price, restaurantImage })) : dispatch(addFavorite({ id, restaurantName, city, price, restaurantImage }));
    setIsFavorite(!isFavorite);
  }

  function isIdInInitialState(id) {
    return initialState.some(item => item.id === id);
  }

  const detailHandler = (restaurantImage, restaurantName, city, star, price, id) => {
    setResDetailData({ restaurantImage, restaurantName, city, star, price, id })
    setPage(4)
  }

  const goBack = () => {
    setPage(0);
  };

  const Discover = () => {
    return (
      <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Header title='Keşfet' firstIconName='filter' secondIconName='heart' onPress1={() => setPage(2)} onPress2={() => setPage(1)} />
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
            data={restaurant}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              const { restaurantImage, restaurantName, city, star, price, id } = item
              return (
                <View
                  style={{
                    marginHorizontal: 5,
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: 'rgb(217, 213, 169)',
                    borderRadius: 10,
                    backgroundColor: 'rgb(242, 238, 220)',
                    width: 170
                  }}>
                  <FastImage
                    style={{ width: '100%', height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{
                      uri: `${restaurantImage}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#000000', fontFamily: 'Poppins-Medium', margin: 10, maxWidth: 160 }}>{restaurantName}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 5, marginBottom: 5 }}>
                    <Text style={{ color: '#000000', fontFamily: 'Poppins-light', marginLeft: 10 }}>{city}</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => { detailHandler(restaurantImage, restaurantName, city, star, price, id) }}>
                      <Text style={{ color: 'rgb(237, 176, 7)', fontSize: 13 }} >Detaya Git </Text>
                      <Icon name='chevron-right' size={17} style={{ color: 'rgb(237, 176, 7)' }} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
          <Text style={{ paddingTop: 10, paddingLeft: 10, fontFamily: 'Poppins-Medium', fontSize: 15, color: '#000000', paddingBottom: 10 }}>Kategoriler</Text>
          <FlatList
            horizontal
            data={category}
            showsHorizontalScrollIndicator={false}
            removeClippedSubviews={false}
            renderItem={({ item }) => {
              const { categoryImage, categoryName } = item
              return (
                <TouchableOpacity style={{ width: 156, height: 152, marginRight: 12, borderColor: 'rgb(217, 213, 169)', borderWidth: 1, backgroundColor: 'rgb(242, 238, 220)', borderRadius: 12 }} >
                  <FastImage
                    style={{ width: 156, height: 152, borderRadius: 10 }}
                    source={{
                      uri: `${categoryImage}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <View
                    style={{
                      position: "relative",
                      bottom: 25,
                      left: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'Inter-Bold',
                        fontSize: 16,
                        lineHeight: 18,
                        letterSpacing: 0.2,
                        color: "#FFFFFF",
                        marginBottom: 12,
                      }}
                    >{categoryName}</Text>
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
      {page === 3 && <SearchInput goBack={goBack} data={restaurant} />}
      {page === 4 && <RestorantDetail goBack={goBack} data={resDetailData} handleFavoriteButtonPress={handleFavoriteButtonPress} isIdInInitialState={isIdInInitialState} />}
    </View>
  );
};

export default ExploreScreen;
