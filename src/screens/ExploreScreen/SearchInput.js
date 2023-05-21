import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import RestaurantCard from '../../components/RestaurantCard';
import {onlyCharacter} from '../../utils/onlyCharacter';

const SearchInput = props => {
  const {goBack, data} = props;
  const [filter, setFilter] = useState('');

  const filterHandler = () => {
    return data.content.filter(item =>
      item.restaurantName.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const renderItem = ({item}) => {
    const {restaurantImage, restaurantName, city, starCount} = item;
    return (
      <RestaurantCard
        imgURL={restaurantImage}
        title={restaurantName}
        city={city}
        star={starCount}
      />
    );
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Header
        title="Restoran Ara"
        firstIconName="backspace"
        onPress1={goBack}
      />
      <TextInput
        style={{
          marginHorizontal: 10,
          backgroundColor: 'rgb(240, 238, 230)',
          borderColor: 'rgb(217, 213, 169)',
          borderWidth: 1,
          borderColor: 'rgb(237, 176, 7)',
          borderRadius: 5,
        }}
        placeholder="Restoran ara"
        value={filter}
        onChangeText={text => setFilter(onlyCharacter(text))}
        autoFocus={true}
        placeholderTextColor={'#000000'}
      />
      <FlatList
        data={filterHandler()}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SearchInput;
