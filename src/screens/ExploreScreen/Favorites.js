import {SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../store/favoritesStore';
import RestaurantCard from '../../components/RestaurantCard';
import Header from '../../components/Header';

const Favorites = props => {
  const {goBack} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.favoritesStore);

  console.log('initialState: ', initialState);

  const handleFavoriteButtonPress = (
    id,
    restaurantName,
    city,
    restaurantImage,
  ) => {
    console.log('restaurantImage: ', restaurantImage);
    isFavorite
      ? dispatch(removeFavorite({id, restaurantName, city, restaurantImage}))
      : dispatch(addFavorite({id, restaurantName, city, restaurantImage}));
    setIsFavorite(!isFavorite);
  };

  function isIdInInitialState(id) {
    return initialState.some(item => item.id === id);
  }

  const renderItem = ({item}) => {
    const {restaurantImage, restaurantName, city, id} = item;
    console.log('IMAGE: ', restaurantImage);

    return (
      <RestaurantCard
        imgURL={restaurantImage}
        title={restaurantName}
        city={city}
        id={id}
        isIdInInitialState={isIdInInitialState}
        handleFavoriteButtonPress={handleFavoriteButtonPress}
      />
    );
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header title="Favoriler" firstIconName="home" onPress1={goBack} />
      <FlatList
        data={initialState}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Favorites;
