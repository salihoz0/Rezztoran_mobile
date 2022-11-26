import React, {useState, useEffect} from 'react';
import {TextInput, View} from 'react-native';
import Restorant_Data from '../../../assets/Data/Restorant_data.json';
import {useNavigation} from '@react-navigation/native';

const SearchBar = props => {
  const navigation = useNavigation();
  const [a,setA]=useState(0);
  let b = 1;
  const [list, setList] = useState('');
  const handleSearch = text => {
    const filteredList = Restorant_Data.filter(Restorant => {
      const searchedText = text.toLowerCase();
      const currentTitle = Restorant.title.toLowerCase();

      return currentTitle.indexOf(text) > -1;
    });
    setList(filteredList);

    setA(1);
  };
  useEffect(() => {
    a > 0
      ? navigation.navigate('SearchedRest', {data: list})
      : console.log('Boş Giriş');
  }, [list]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara... "
        onSubmitEditing={text => {
          handleSearch(text.nativeEvent.text);
        }}
      />
    </View>
  );
};

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
});

export default SearchBar;
