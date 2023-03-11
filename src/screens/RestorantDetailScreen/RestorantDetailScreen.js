import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,

} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ClockCarousel from '../../components/ClockCarousel';
import Header from '../../components/Header'
import FastImage from 'react-native-fast-image';
import { hours } from './tmpData'
import Menu_data from '../../../assets/Data/Menu_data.json'
import Comment_data from '../../../assets/Data/Comment_data.json'
import Menu from './Menu'
import Comment from './Comment';
//import Comment2 from './Comment2';

const RestorantDetailScreen = props => {
  const { imgURL, title, city, star, price, id } = props.data
  const { goBack, handleFavoriteButtonPress, isIdInInitialState } = props
  const navigation = useNavigation();
  const [page, setPage] = useState(0)
  const [selectedHour, setSelectedHour] = useState(null)

  console.log(selectedHour);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1
      }}>
      <Header title='Detay' firstIconName='home' onPress1={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          marginHorizontal: 10,
          backgroundColor: 'rgb(240, 238, 230)',
          borderColor: 'rgb(217, 213, 169)',
          borderRadius: 5,
          borderWidth: 1
        }}>
          <FastImage
            style={{
              width: '100%',
              height: 150,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5
            }}
            source={{
              uri: `${imgURL}`,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          >
            <TouchableOpacity style={{ position: 'absolute', right: 10, alignItems: 'center', top: 10, zIndex: 2 }} onPress={() => { handleFavoriteButtonPress(id, title, city, price, imgURL) }}>
              {
                isIdInInitialState(id) ? <Icon name="heart" size={30} style={{ color: 'rgb(237, 176, 7)', backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }} /> : <Icon name="heart-outline" size={30} style={{ color: 'rgb(237, 176, 7)', backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }} />
              }
            </TouchableOpacity>
          </FastImage>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginHorizontal: 10 }}>
              <Text numberOfLines={1} ellipsizeMode='tail' style={{
                fontSize: 25,
                fontFamily: 'Poppins-Medium',
                color: 'black',
                marginTop: 10,
                width: 200
              }}>{title}</Text>
              <Text style={{
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                color: 'rgb(212, 123, 51)'
              }}>{city}</Text>
              <Text style={{
                backgroundColor: 'rgb(237, 176, 7)',
                width: 70,
                paddingVertical: 5,
                paddingLeft: 5,
                borderRadius: 5,
                marginTop: 10,
                color: 'black'
              }}>₺ {price}</Text>
            </View>
            <View style={{
              paddingTop: 10,
              marginBottom: 10,
              marginLeft: 20,
            }}>
              <View style={{
                alignItems: 'center',
                borderColor: 'rgb(237, 176, 7)',
                borderWidth: 1,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 5,
                backgroundColor: 'rgb(242, 238, 220)'
              }}>
                <Icon name="clock-time-three-outline" size={20} style={{ color: 'rgb(212, 123, 51)' }} />
                <Text style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                  color: 'rgb(212, 123, 51)'
                }}>Çalışma Saatleri</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Inter-Bold', color: 'rgb(212, 123, 51)' }}>09:30 - 22:00</Text>
              </View>
              <TouchableOpacity onPress={() => { navigation.navigate('TabNavigation', { screen: 'Rezervasyon' }) }} style={{
                borderWidth: 1,
                borderColor: '#0cc45c',
                backgroundColor: '#b4e6c2',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 5,
                width: '100%',
                marginTop: 10,
              }}>
                <Text style={{ color: '#0cc45c', fontFamily: 'Inter-Bold' }}>Rezervasyon</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ClockCarousel hours={hours} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
        <Menu data={Menu_data} />
        <Comment data={Comment_data} page={page} setPage={setPage} />
      </ScrollView>
    </SafeAreaView>
  )
};

export default RestorantDetailScreen;

/*
Sorunlar
- bu store'dan rezervasyonların çekilmesi ve Rezervasyonlarım sayfasında görüntülenmesi
- Saatin çalışma saatlerine uygun olması gerekmesi (BACKEND ile ortak)
- Yorumlar kısımlarının tasarlanması (Bence Menu kısmının ayrıntılı olmasına gerek yok)
*/