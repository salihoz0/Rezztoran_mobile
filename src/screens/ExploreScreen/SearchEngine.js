import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SortMenu from '../../components/SortMenu';
import {useDispatch, useSelector} from 'react-redux';
// import data from '../../../assets/Data/Restorant_data.json'
import RestaurantCard from '../../components/RestaurantCard';
import {resetSort, resetFilter} from '../../store/searchEngineStore';
import Header from '../../components/Header';
import {useGetRestaurant} from '../../api/restaurant';

const SearchEngine = props => {
  const {goBack} = props;
  const {sortData, filterData} = useSelector(state => state.searchEngineStore);
  const dispatch = useDispatch();
  const [searchEngineData, setSearchEngineData] = useState(data?.content);
  const [page, setPage] = useState(0);
  const nullControl = sortData === null && filterData === null;
  const {data: data} = useGetRestaurant();

  console.log('data: ', data);
  console.log('searchEngineData: ', searchEngineData);

  useEffect(() => {
    if (nullControl) {
      setSearchEngineData(data);
    } else {
      let filteredData = filterRestaurantsByCategory(data, filterData);
      let sortedData = sortItemsBy(filteredData, sortData);
      setSearchEngineData(sortedData);
    }
  }, [sortData, filterData]);

  const sortItemsBy = (items, sortType) => {
    let sortedData = [...items];
    switch (sortType) {
      case 'ascPrice':
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case 'descPrice':
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case 'highRated':
        sortedData.sort((a, b) => b.starCount - a.starCount);
        break;
      case 'mostReviewed':
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

  const clearSearchEngine = () => {
    dispatch(resetSort({}));
    dispatch(resetFilter({}));
  };

  const goBackSearchEngine = () => {
    setPage(0);
  };

  const renderItem = ({item}) => {
    const {restaurantImage, restaurantName, city} = item;
    return (
      <RestaurantCard
        imgURL={restaurantImage}
        title={restaurantName}
        city={city}
      />
    );
  };

  const HomePage = () => {
    return (
      <SafeAreaView
        edges={['bottom']}
        style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <Header title="Filtrele" firstIconName="home" onPress1={goBack} />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width / 2.2,
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginTop: 10,
              alignItems: 'center',
              elevation: 3,
              borderWidth: 1,
              borderColor: 'rgb(242, 238, 220)',
            }}
            onPress={() => {
              clearSearchEngine();
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {nullControl ? (
                <Icon
                  name="delete-empty-outline"
                  size={30}
                  color={'rgb(212, 123, 51)'}
                />
              ) : (
                <Icon
                  name="delete-outline"
                  size={30}
                  color={'rgb(212, 123, 51)'}
                />
              )}
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  color: 'rgb(212, 123, 51)',
                }}>
                Temizle
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width / 2.2,
              backgroundColor: 'white',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              marginTop: 10,
              alignItems: 'center',
              elevation: 3,
              borderWidth: 1,
              borderColor: 'rgb(242, 238, 220)',
            }}
            onPress={() => setPage(1)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {nullControl ? (
                <Icon
                  name="filter-outline"
                  size={30}
                  color={'rgb(212, 123, 51)'}
                />
              ) : (
                <Icon name="filter" size={30} color={'rgb(212, 123, 51)'} />
              )}
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  color: 'rgb(212, 123, 51)',
                }}>
                Filtrele
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList data={searchEngineData?.content} renderItem={renderItem} />
      </SafeAreaView>
    );
  };

  return (
    <>
      {page === 0 && <HomePage />}
      {page === 1 && <SortMenu data={data} goBack={goBackSearchEngine} />}
    </>
  );
};

export default SearchEngine;
