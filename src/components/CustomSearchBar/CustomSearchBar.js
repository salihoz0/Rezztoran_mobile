import React, {useState, useEffect} from 'react';
import {TextInput, View, Pressable} from 'react-native';
import Restorant_Data from '../../../assets/Data/Restorant_data.json';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './CustomSearchBarStyles';
const SearchBar = props => {
  const navigation = useNavigation();
  const [a, SetA] = useState(0);
  const [value] = useState();
  const [list, setList] = useState('');
  const [text, setText] = useState('');

  const handleSearch = text => {
    const filteredList = Restorant_Data.filter(Restorant => {
      const searchedText = text.toLowerCase();
      const currentTitle = Restorant.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });

    SetA(1);
    setList(filteredList);
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
            placeholder="Restoran deneyin ...  "
            autoComplete="off"
            value={value}
            placeholderTextColor="black"
            onChangeText={text => setText(text)}
            onSubmitEditing={text => {
              handleSearch(text.nativeEvent.text);
            }}
          />
          <Pressable onPress={() => handleSearch(text)}>
            <Icon name="ios-search-outline" size={35} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
