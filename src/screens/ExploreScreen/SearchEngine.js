import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SortMenu from '../../components/SortMenu'
import { useSelector } from 'react-redux';
import data from '../../../assets/Data/Restorant_data.json'
import FastImage from 'react-native-fast-image'
import RestaurantCard from '../../components/RestaurantCard';

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
      <RestaurantCard
        imgURL={imgURL}
        title={title}
        city={city}
        price={price}
        star={star}
        most_rated={most_rated}
      />
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