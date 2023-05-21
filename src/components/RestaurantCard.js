import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

const RestaurantCard = props => {
  const {
    imgURL,
    title,
    city,
    // price,
    id,
    isIdInInitialState,
    handleFavoriteButtonPress,
  } = props;
  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'rgb(217, 213, 169)',
          flexDirection: 'row',
          paddingVertical: 5,
          marginHorizontal: 5,
          marginVertical: 7,
          borderRadius: 10,
        }}>
        <FastImage
          style={{width: 100, height: 100, marginLeft: 5, borderRadius: 5}}
          source={{
            uri: `${imgURL}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        {id !== undefined ? (
          <>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Medium',
                  color: 'black',
                  marginTop: 10,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                  color: 'rgb(212, 123, 51)',
                }}>
                {city}
              </Text>
              <Text
                style={{
                  backgroundColor: 'rgb(237, 176, 7)',
                  width: 70,
                  paddingVertical: 5,
                  paddingLeft: 5,
                  borderRadius: 10,
                  marginTop: 10,
                  color: 'black',
                }}>
                ₺ {price}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 70,
                height: 40,
                position: 'absolute',
                right: 0,
                alignItems: 'center',
                marginTop: 10,
              }}
              onPress={() => {
                handleFavoriteButtonPress(id, title, city, imgURL);
              }}>
              {isIdInInitialState(id) ? (
                <Icon
                  name="heart"
                  size={25}
                  style={{color: 'rgb(237, 176, 7)'}}
                />
              ) : (
                <Icon
                  name="heart-outline"
                  size={25}
                  style={{color: 'rgb(237, 176, 7)'}}
                />
              )}
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={{marginLeft: 10}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Medium',
                  color: 'black',
                  marginTop: 10,
                  width: 200,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                  color: 'rgb(212, 123, 51)',
                }}>
                {city}
              </Text>
              {/* <Text
                style={{
                  backgroundColor: 'rgb(237, 176, 7)',
                  width: 70,
                  paddingVertical: 5,
                  paddingLeft: 5,
                  borderRadius: 10,
                  marginTop: 10,
                  color: 'black',
                }}>
                ₺ {price}
              </Text> */}
            </View>
            {/* <Text
              style={{
                paddingHorizontal: 10,
                position: 'absolute',
                bottom: 13,
                left: 200,
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#000000',
              }}>
              {' '}
              <Icon name="star" size={15} color={'rgb(212, 123, 51)'} /> {star}
            </Text> */}
            {/* <View
              style={{
                position: 'absolute',
                right: 10,
                alignItems: 'center',
                marginTop: 10,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
                backgroundColor: 'rgb(217, 213, 169)',
              }}>
              <Text style={{fontSize: 15, color: '#FFFFFF'}}>{most_rated}</Text>
            </View> */}
          </>
        )}
      </View>
    </View>
  );
};

export default RestaurantCard;
