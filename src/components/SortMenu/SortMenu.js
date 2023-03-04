import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu, MenuItem } from 'react-native-material-menu';

const SortMenu = props => {
  const { setSearchEngineData, data } = props
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  function sortItemsBy(selectedSortType) {
    let sortedData = [];
    switch (selectedSortType) {
      case "ascPrice":
        sortedData = [...data].sort((a, b) => a.price - b.price);
        break;
      case "descPrice":
        sortedData = [...data].sort((a, b) => b.price - a.price);
        break;
      case "highRated":
        sortedData = [...data].sort((a, b) => b.star - a.star);
        break;
      case "mostReviewed":
        sortedData = [...data].sort((a, b) => b.most_rated - a.most_rated);
        break;
      default:
        sortedData = data;
        break;
    }
    setSearchEngineData(sortedData);
  }


  function handleSortMenuItemPress(sortType) {
    sortItemsBy(sortType);
    hideMenu();
  }

  return (
    <View style={{ flexDirection: 'row' }}>
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
    </View>
  );
};


export default SortMenu;
