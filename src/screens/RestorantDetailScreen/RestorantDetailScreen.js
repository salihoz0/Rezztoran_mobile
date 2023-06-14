import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import FastImage from 'react-native-fast-image';
import {showLocation} from 'react-native-map-link';
import Menu from './Menu';
import ReservationCreate from '../../components/ReservationCreate/ReservationCreate';
import { useDelete } from '../../api/reserve';
const RestorantDetailScreen = props => {
  const {
    id,
    restaurantImage,
    restaurantName,
    openingTime,
    closingTime,
    detailedAddress,
    restaurantAttributes,
    city,
    latitude,
    longitude,
  } = props.data;

  console.log('PROPS: ', props);
  const {goBack, handleFavoriteButtonPress, isIdInInitialState} = props;
  const [visible, setVisible] = useState(false);
  console.log(longitude);
  const openMap = () => {
    showLocation({
      latitude: latitude,
      longitude: longitude,
      title: restaurantName,
      alwaysIncludeGoogle: true,
      dialogTitle: 'Uygulamada aç',
      dialogMessage: detailedAddress,
      cancelText: 'Vazgeç',
      appsWhiteList: ['google-maps'],
      directionsMode: 'car',
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      {visible ? (
        <SafeAreaView
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}>
            <Icon name="arrow-collapse-left" size={35} color="black" />
          </TouchableOpacity>
          <ReservationCreate restaurantId={id} />
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
          }}>
          <Header title="Detay" firstIconName="home" onPress1={goBack} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: 'rgb(240, 238, 230)',
                borderColor: 'rgb(217, 213, 169)',
                borderRadius: 5,
                borderWidth: 1,
              }}>
              <FastImage
                style={{
                  width: '100%',
                  height: 150,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}
                source={{
                  uri: `${restaurantImage}`,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 10,
                    alignItems: 'center',
                    top: 10,
                    zIndex: 2,
                  }}
                  onPress={() => {
                    handleFavoriteButtonPress(
                      id,
                      restaurantName,
                      city,
                      restaurantImage,
                    );
                  }}>
                  {isIdInInitialState(id) ? (
                    <Icon
                      name="heart"
                      size={30}
                      style={{
                        color: 'rgb(237, 176, 7)',
                        backgroundColor: '#FFFFFF',
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        borderRadius: 20,
                      }}
                    />
                  ) : (
                    <Icon
                      name="heart-outline"
                      size={30}
                      style={{
                        color: 'rgb(237, 176, 7)',
                        backgroundColor: '#FFFFFF',
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        borderRadius: 20,
                      }}
                    />
                  )}
                </TouchableOpacity>
              </FastImage>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginHorizontal: 10}}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 25,
                      fontFamily: 'Poppins-Medium',
                      color: 'black',
                      marginTop: 10,
                      width: 200,
                    }}>
                    {restaurantName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: 'Poppins-Medium',
                      color: 'rgb(212, 123, 51)',
                    }}>
                    {city}
                  </Text>
                </View>
                <View
                  style={{
                    paddingTop: 10,
                    marginBottom: 10,
                    marginLeft: 20,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      borderColor: 'rgb(237, 176, 7)',
                      borderWidth: 1,
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                      borderRadius: 5,
                      backgroundColor: 'rgb(242, 238, 220)',
                    }}>
                    <Icon
                      name="clock-time-three-outline"
                      size={20}
                      style={{color: 'rgb(212, 123, 51)'}}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: 'Poppins-Medium',
                        color: 'rgb(212, 123, 51)',
                      }}>
                      Çalışma Saatleri
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: 'Inter-Bold',
                        color: 'rgb(212, 123, 51)',
                      }}>
                      {openingTime} - {closingTime}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible(!visible);
                    }}
                    style={{
                      borderWidth: 1,
                      borderColor: '#0cc45c',
                      backgroundColor: '#b4e6c2',
                      alignItems: 'center',
                      paddingVertical: 10,
                      borderRadius: 5,
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <Text style={{color: '#0cc45c', fontFamily: 'Inter-Bold'}}>
                      Rezervasyon
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: 'rgb(240, 238, 230)',
                borderColor: 'rgb(217, 213, 169)',
                borderWidth: 1,
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingVertical: 10,
                borderRadius: 5,
              }}
              onPress={() => openMap()}>
              <Text>{detailedAddress}</Text>
            </TouchableOpacity>
            <Menu restaurantAttributes={restaurantAttributes} />
            {/* <Comment data={Comment_data} page={page} setPage={setPage} /> */}
          </ScrollView>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default RestorantDetailScreen;

/*
Sorunlar
- bu store'dan rezervasyonların çekilmesi ve Rezervasyonlarım sayfasında görüntülenmesi
- Saatin çalışma saatlerine uygun olması gerekmesi (BACKEND ile ortak)
- Yorumlar kısımlarının tasarlanması (Bence Menu kısmının ayrıntılı olmasına gerek yok)
*/
