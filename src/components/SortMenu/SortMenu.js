import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '../CheckBox';
import { sortMenu, filterMenu } from './sort-filter';
import { useDispatch, useSelector } from 'react-redux';
import { setSort, resetSort, setFilter, resetFilter } from '../../store/searchEngineStore'

const SortMenu = props => {
  const { goBack } = props
  const { sortData, filterData } = useSelector((state) => state.searchEngineStore)
  const [sortSelected, setSortSelected] = useState(false)
  const [filterSelected, setFilterSelected] = useState(false)
  const dispatch = useDispatch()

  // function sortItemsBy(selectedSortType) {
  //   let sortedData = [];
  //   switch (selectedSortType) {
  //     case "ascPrice":
  //       sortedData = [...data].sort((a, b) => a.price - b.price);
  //       break;
  //     case "descPrice":
  //       sortedData = [...data].sort((a, b) => b.price - a.price);
  //       break;
  //     case "highRated":
  //       sortedData = [...data].sort((a, b) => b.star - a.star);
  //       break;
  //     case "mostReviewed":
  //       sortedData = [...data].sort((a, b) => b.most_rated - a.most_rated);
  //       break;
  //     default:
  //       sortedData = data;
  //       break;
  //   }
  //   setSearchEngineData(sortedData);
  // }

  const handleSortChange = (key) => {
    dispatch(
      setSort({
        sortData: key
      })
    )
  }

  const handleFilterChange = (key) => {
    dispatch(
      setFilter({
        filterData: key
      })
    )
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Filtrele</Text>
        <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={goBack}>
            <Icon name="backspace" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 60 }}>
        <TouchableOpacity onPress={() => { setSortSelected(!sortSelected) }}>
          <View
            style={{
              paddingVertical: 16,
              paddingHorizontal: 24,
              borderBottomWidth: 1,
              borderColor: '#F3F3F3',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                lineHeight: 20,
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                letterSpacing: 0.2,
                color: '#000',
              }}>
              Sırala
            </Text>
            <Icon
              style={{
                position: 'absolute',
                right: 24,
              }}
              name={
                sortSelected
                  ? 'arrow-down'
                  : 'arrow-right'}
              size={20}
              color='rgb(212, 123, 51)'
            />
          </View>
        </TouchableOpacity>
        {
          sortSelected && (
            <View style={{ justifyContent: 'space-around', marginLeft: 24, marginBottom: 10 }}>
              {
                sortMenu.map((item) => {
                  return (
                    <CheckBox
                      key={item.key}
                      theme="ORANGE"
                      onToggle={() => handleSortChange(item.key)}
                      selected={sortData === item.key}
                      text={item.text} />
                  )
                })
              }
            </View>
          )
        }
        <TouchableOpacity onPress={() => { setFilterSelected(!filterSelected) }}>
          <View
            style={{
              paddingVertical: 16,
              paddingHorizontal: 24,
              borderBottomWidth: 1,
              borderBottomColor: '#F3F3F3',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                lineHeight: 20,
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                letterSpacing: 0.2,
                color: '#000',
              }}>
              Filtrele
            </Text>
            <Icon
              style={{
                position: 'absolute',
                right: 24,
              }}
              name={
                filterSelected
                  ? 'arrow-down'
                  : 'arrow-right'}
              size={20}
              color='rgb(212, 123, 51)'
            />
          </View>
        </TouchableOpacity>
        {
          filterSelected && (
            <View style={{ justifyContent: 'space-around', marginLeft: 24, marginBottom: 10 }}>
              {
                filterMenu.map((item) => {
                  return (
                    <CheckBox
                      key={item.key}
                      theme="ORANGE"
                      onToggle={() => handleFilterChange(item.key)}
                      selected={filterData === item.key}
                      text={item.text} />
                  )
                })
              }
            </View>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
};


export default SortMenu;

/*
<Menu
        visible={visible}
        anchor={
          <Pressable
            style={{
              width: Dimensions.get('screen').width / 2,
              backgroundColor: 'white',
              marginLeft: 13,
              borderRadius: 20,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              marginTop: 10,
              alignItems: 'center',
              elevation: 3,
            }}
            onPress={showMenu}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="sort-variant" size={30} color={'rgb(212, 123, 51)'} />
              <Text style={{ fontSize: 17, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>Sırala</Text>
            </View>
          </Pressable>
        }
        onRequestClose={hideMenu}>
        <MenuItem onPress={() => handleSortMenuItemPress("ascPrice")}>Artan Fiyat</MenuItem>
        <MenuItem onPress={() => handleSortMenuItemPress("descPrice")}>Azalan Fiyat</MenuItem>
        <MenuItem onPress={() => handleSortMenuItemPress("highRated")}>Yüksek Puanlılar</MenuItem>
        <MenuItem onPress={() => handleSortMenuItemPress("mostReviewed")}>En Çok Değerlendirilenler</MenuItem>
      </Menu>
*/
