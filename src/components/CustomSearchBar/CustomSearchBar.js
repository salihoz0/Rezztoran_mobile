import React, { useState, useEffect } from 'react';
import Restorant_Data from '../../../assets/Data/Restorant_data.json';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

const SearchBar = () => {
  const navigation = useNavigation();
  const [a, SetA] = useState(0);
  const [value, setValue] = useState();
  const [list, setList] = useState('');

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
      ? navigation.navigate('SearchedRest', { data: list })
      : console.log('Boş Giriş');
  }, [list]);

  return (
    <TextInput
      placeholder="Restoran deneyin"
      autoComplete="off"
      value={value}
      placeholderTextColor="black"
      onChangeText={text => setValue(text)}
      onSubmitEditing={text => {
        handleSearch(text.nativeEvent.text);
      }}
      autoFocus={true}
      inlineImageLeft='search'
      inlineImagePadding={5}
    />
  );
};

export default SearchBar;
