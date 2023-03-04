import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-paper'
import SortMenu from '../../components/SortMenu'
import { useDispatch, useSelector } from 'react-redux';
import data from '../../../assets/Data/Restorant_data.json'
import FastImage from 'react-native-fast-image'

const SearchEngine = (props) => {
  const { goBack } = props
  const { sortData, filterData } = useSelector((state) => state.searchEngineStore)
  const [search, setSearch] = useState('')
  const [searchEngineData, setSearchEngineData] = useState(data)
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (sortData === null && filterData === null) {
      setSearchEngineData(data)
    } else {
      let filteredData = filterRestaurantsByCategory(data, filterData);
      let sortedData = sortItemsBy(filteredData, sortData);
      setSearchEngineData(sortedData);
    }
  }, [sortData, filterData]);

  const sortItemsBy = (items, sortType) => {
    let sortedData = [...items];
    switch (sortType) {
      case "ascPrice":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "descPrice":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "highRated":
        sortedData.sort((a, b) => b.star - a.star);
        break;
      case "mostReviewed":
        sortedData.sort((a, b) => b.most_rated - a.most_rated);
        break;
      default:
        break;
    }
    return sortedData;
  };

  const filterRestaurantsByCategory = (restaurants, category) => {
    return restaurants.filter(restaurant => restaurant.category === category);
  };

  const goBackSearchEngine = () => {
    setPage(0);
  };

  const renderItem = ({ item }) => {
    const { imgURL, title, city, price, star, most_rated } = item
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
            <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: 'black', marginTop: 10, width: 200 }}>{title}</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>{city}</Text>
            <Text style={{ backgroundColor: 'rgb(237, 176, 7)', width: 70, paddingVertical: 5, paddingLeft: 5, borderRadius: 10, marginTop: 10, color: 'black' }}>₺ {price}</Text>
          </View>
          <Text style={{ paddingHorizontal: 10, position: 'absolute', bottom: 13, left: 200, alignItems: 'center', justifyContent: 'space-between', color: '#000000' }}> <Icon name="star" size={15} color={'rgb(212, 123, 51)'} /> {star}</Text>
          <View style={{ position: 'absolute', right: 10, alignItems: 'center', marginTop: 10, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, backgroundColor: 'rgb(217, 213, 169)', }}>
            <Text style={{ fontSize: 15, color: '#FFFFFF' }}>{most_rated}</Text>
          </View>
        </View>
      </View>
    )
  }

  const HomePage = () => {
    return (
      <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Filtrele</Text>
          <TouchableOpacity onPress={goBack} >
            <Icon name="home" size={30} style={{ color: 'rgb(212, 123, 51)' }} />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            value={search}
            onChange={(val) => setSearch(val)}
            placeholder='Restoran Ara'
            style={{ marginHorizontal: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)' }}
          />
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width / 1.05,
              backgroundColor: 'white',
              borderRadius: 10,
              marginTop: 10,
              alignItems: 'center',
              elevation: 3,
              marginLeft: 10
            }}
            onPress={() => setPage(1)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="filter-outline" size={30} color={'rgb(212, 123, 51)'} />
              <Text style={{ fontSize: 17, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>Filtrele</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          data={searchEngineData}
          renderItem={renderItem}
        />
      </SafeAreaView>
    )
  }

  return (
    <>
      {page === 0 && <HomePage />}
      {page === 1 && <SortMenu data={data} goBack={goBackSearchEngine} />}
    </>
  )

}

export default SearchEngine