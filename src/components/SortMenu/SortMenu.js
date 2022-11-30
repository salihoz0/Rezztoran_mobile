import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {useNavigation} from '@react-navigation/native';
import data from '../../../assets/Data/Restorant_data.json';
const SortMenu = props => {
  const navigation = useNavigation();
  const [sortMenuShow, setSortMenuShow] = useState(false);
  const [a, SetA] = useState(0);
  const [selectedSort, setSelectedSort] = useState('');

  const handleSearch = text => {
    const filteredList = data.filter(Restorant => {
      const searchedText = text.toLowerCase();
      const currentTitle = Restorant.title.toLowerCase();
      const currentcate = Restorant.category.toLowerCase();
      const currentcity = Restorant.city.toLowerCase();

      return (
        currentTitle.indexOf(searchedText) > -1 ||
        currentcate.indexOf(searchedText) > -1 ||
        currentcity.indexOf(searchedText) > -1
      );
    });

    const filteredListCategory = filteredList.filter(Category => {
      const currentCategory = Category.category;

      return currentCategory.indexOf(selectedCategory) > -1;
    });
    const filteredListCity = filteredListCategory.filter(Cities => {
      const currentCity = Cities.city;

      return currentCity.indexOf(selectedCity) > -1;
    });
    setList(filteredListCity);
  };
  const handleSort = () => {
    //datamızdaki restoranları seçilen değere göre sıralama işlemini yapacak
    if (selectedSort == 'Artan Fiyat') {
      const sorted = [...props.data].sort((a, b) => a.price - b.price); // artan fiyat göre sıralam işlemi
      SetA(0), navigation.navigate('SearchedRest', {data: sorted});
    } else if (selectedSort == 'Azalan Fiyat') {
      const sorted = [...props.data].sort((a, b) => b.price - a.price); // azalan fiyata göre sıralama işlemi
      SetA(0), navigation.navigate('SearchedRest', {data: sorted});
    } else if (selectedSort == 'Yüksek Puanlılar') {
      const sorted = [...props.data].sort((a, b) => b.star - a.star); // artan yıldıza göre sıralama işlemi
      SetA(0), navigation.navigate('SearchedRest', {data: sorted});
    }else if (selectedSort == 'En Çok Değerlendirilenler') {
      const sorted = [...props.data].sort((a, b) => b.most_rated - a.most_rated); // azalan değerlendirme sayısına göre sıralama işlemi
      SetA(0), navigation.navigate('SearchedRest', {data: sorted});
    }
  };

  useEffect(() => {
    a > 0 ? handleSort() : console.log('Boş Giriş');
  }, [selectedSort]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <Menu
          style={styles.menu}
          visible={sortMenuShow}
          anchor={
            <Pressable
              style={styles.icon}
              onPress={() => setSortMenuShow(!sortMenuShow)}>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Icon
                  name="sort-variant"
                  size={35}
                  color={'gray'}
                />
                
                <Text style={styles.text}>Sırala</Text>
           
              </View>
            </Pressable>
          }
          onRequestClose={() => setSortMenuShow(false)}>
          <MenuItem
            style={styles.menu_item}
            onPress={() => (
              setSortMenuShow(!sortMenuShow),
              SetA(1),
              setSelectedSort('Artan Fiyat')
            )}>
            Artan Fiyat
          </MenuItem>
          <MenuItem
            style={styles.menu_item}
            onPress={() => (
              setSortMenuShow(!sortMenuShow),
              SetA(1),
              setSelectedSort('Azalan Fiyat')
            )}>
            Azalan Fiyat
          </MenuItem>
          <MenuItem
            style={styles.menu_item}
            onPress={() => (
              setSortMenuShow(!sortMenuShow),
              SetA(1),
              setSelectedSort('Yüksek Puanlılar')
            )}>
            Yüksek Puanlılar
          </MenuItem>
          <MenuItem
            style={styles.menu_item}
            onPress={() => (
              setSortMenuShow(!sortMenuShow),
              SetA(1),
              setSelectedSort('En Çok Değerlendirilenler')
            )}>
            En Çok Değerlendirilenler
          </MenuItem>
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: Dimensions.get('screen').width / 2,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  menu: {
    width: Dimensions.get('screen').width / 2,
    borderRadius: 20,
    marginTop: 40,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  menu_item: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  header: {
    fontSize: 25,
    paddingLeft: 25,
 
  },
  text:{
    alignSelf:'center'
  }
});

export default SortMenu;
