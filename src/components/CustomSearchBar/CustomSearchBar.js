import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  View,
  Modal,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Restorant_Data from '../../../assets/Data/Restorant_data.json';
import {useNavigation} from '@react-navigation/native';
import categories_data from '../../../assets/Data/Categories_data.json';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchBar = props => {
  const navigation = useNavigation();
  const [a, SetA] = useState(0);
  const [b, SetB] = useState(0);
  const [value] = useState();
  const [list, setList] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = text => {
    const filteredList = Restorant_Data.filter(Restorant => {
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
        <View style={styles.inner_container}>
          <TextInput
            style={styles.text_input}
            placeholder="Restorant, Kategori, Şehir ara... "
            autoComplete="off"
            value={value}
            onSubmitEditing={text => {
              handleSearch(text.nativeEvent.text);
            }}
          />
          <Icon name="ios-search-outline" size={35} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 17,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },

  text_input: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    textAlignVertical: 'bottom',
    width: Dimensions.get('screen').width / 2,
  },
});

export default SearchBar;
