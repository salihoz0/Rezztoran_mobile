import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import Restorant_Data from '../../../assets/Data/Restorant_data.json';
import {useNavigation} from '@react-navigation/native';
import categories_data from '../../../assets/Data/Categories_data.json';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
const SearchBar = props => {
  const navigation = useNavigation();
  const [a, SetA] = useState(0);
  const [value, setValue] = useState();
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
      

      return currentTitle.indexOf(searchedText) > -1 || currentcate.indexOf(searchedText) > -1 || currentcity.indexOf(searchedText) > -1;

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

  const Image_pressed = item => {
      setSelectedCategory(item),
      setModalVisible(!modalVisible),
      handleSearch('');
  };

  return (
    <View>
      <View style={styles.container}>
        <View >
          <TextInput
            style={styles.text_input}
            placeholder="Restorant, Kategori, Şehir ara... "
            autoComplete='off'
            value={value}
            onFocus={() => setModalVisible(!modalVisible)}
            onSubmitEditing={text => {
              handleSearch(text.nativeEvent.text);
            }}
          />
        </View>
      </View>

      <View>
        <Modal
          style={styles.modal}
          animationType="slide"
          visible={modalVisible}>
          <View style={styles.searchbar}>
            <TextInput
              style={styles.text_input}
              placeholder="Restorant, Kategori, Şehir ara... "
              autoComplete='off'
              autoFocus
              value={value}
              onSubmitEditing={text => {
                handleSearch(text.nativeEvent.text);
              }}
            />
          </View>
          <Text style={styles.header}>KATEGORİLER</Text>
          <FlatList
            data={categories_data}
            renderItem={({item}) => (
              <View style={styles.inner_container}>
                <Pressable onPress={() => Image_pressed(item.category)}>
                  <Image style={styles.image} source={{uri: item.imgURL}} />
                  <Text style={styles.text}>{item.category}</Text>
                </Pressable>
              </View>
            )}
            numColumns={2}
          />
          <Pressable
            style={styles.icon}
            onPress={() => setModalVisible(!modalVisible)}>
            <Icon
              name="arrow-circle-left"
              size={50}
              color={'black'}
              backgroundColor={'white'}
            />
          </Pressable>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 5,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('window').height / 17,
  },
  inner_container: {
    borderRadius: 30,
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 4,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 30,
    margin: 5,
    backgroundColor: '#e0e0e0',
  },
  image: {
    borderRadius: 30,
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 5,
    resizeMode: 'stretch',
  },

  text_input: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    textAlignVertical: 'bottom',
    width: Dimensions.get('screen').width,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    textAlignVertical: 'bottom',
  },
  modal: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.5,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  searchbar: {
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 5,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('window').height / 17,
  },
  icon: {
    zIndex: 1,
    position: 'absolute',
    marginRight: Dimensions.get('window').width / 1.12,
    marginTop: Dimensions.get('window').height / 1.02,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default SearchBar;
