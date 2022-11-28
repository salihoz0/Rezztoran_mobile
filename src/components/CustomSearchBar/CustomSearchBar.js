import React, {useState, useEffect} from 'react';
import {Dimensions, Pressable, TextInput, View} from 'react-native';
import Restorant_Data from '../../../assets/Data/Restorant_data.json';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarComponent from '../StarComponent';
import {SelectList} from 'react-native-dropdown-select-list';
import City_data from '../../../assets/Data/City_data.json';
const SearchBar = props => {
  const navigation = useNavigation();
  const [a, SetA] = useState(0);
  const [value, setValue] = useState();
  const [list, setList] = useState('');
  const [filterShow, setFilterShow] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');


  const handleSearch = text => {
    const filteredList = Restorant_Data.filter(Restorant => {
      const searchedText = text.toLowerCase();
      const currentTitle = Restorant.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    
    const filteredListCity = filteredList.filter(Cities => {
      const currentCity = Cities.city; 
      
      return currentCity.indexOf(selectedCity) > -1;
    });

    SetA(1);
    setList(filteredListCity);
  };
  useEffect(() => {
    a > 0
      ? navigation.navigate('SearchedRest', {data: list})
      : console.log('Boş Giriş');
  }, [list]);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.text}
            placeholder="Ara... "
            value={value}
            onSubmitEditing={text => {
              handleSearch(text.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.icon}>
          <Pressable onPress={() => setFilterShow(!filterShow)}>
            {!filterShow ? (
              <Icon name="filter-menu" size={30} color={'gray'} />
            ) : (
              <Icon name="filter-remove" size={30} color={'gray'} />
            )}
          </Pressable>
        </View>
      </View>
      <View style={styles.filter_menu}>
        {filterShow ? (
          <View style={styles.inner_Menu}>
            <StarComponent title="Restorant yıldızı seç" />
            <SelectList
              dropdownShown={false}
              placeholder={'Şehirinizi Seçin'}
              maxHeight={100}
              boxStyles={{backgroundColor: 'white', margin: 3,width:220,zIndex:2,alignSelf:'flex-start',}}
              dropdownStyles={{backgroundColor: 'white',zIndex:2,width:220,}}
              setSelected={val => setSelectedCity(val)}
              save="value"
              data={City_data}
              dropdownItemStyles={{
                borderWidth: 0.3,
                borderRadius: 10,
                margin: 3,
                width:210,  
                zIndex:2,
                alignSelf:'flex-start'
              }}
            />
          </View>
        ) : (
          console.log('filtre seçilmedi')
        )}
      </View>
    </View>
  );
};

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 5,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('window').height / 17,
  },
  text: {
    marginLeft: 20,
    width: Dimensions.get('window').width / 1.2,
  },
  icon: {
    alignSelf: 'center',
  },

  filter_menu: {
    backgroundColor: '#eceff1',
    borderRadius: 40,
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'space-between',
    zIndex: 1,
    position: 'absolute',
    width: Dimensions.get('screen').width,
  },
  inner_Menu: {
    marginLeft: 6,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    zIndex:2,
  },
});

export default SearchBar;
