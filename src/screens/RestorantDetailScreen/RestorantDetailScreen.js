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
import QRMenu from '../../components/QRMenu';
import ClockCarousel from '../../components/ClockCarousel';
import Header from '../../components/Header'
import FastImage from 'react-native-fast-image';
import { hours } from './tmpData'
import Menu_data from '../../../assets/Data/Menu_data.json'
import Comment_data from '../../../assets/Data/Comment_data.json'
import Menu from './Menu'
import Comment from './Comment';
import Comment2 from './Comment2';

const RestorantDetailScreen = props => {
  const { imgURL, title, city, star, price, id } = props.data
  const { goBack, handleFavoriteButtonPress, isIdInInitialState } = props
  const navigation = useNavigation();
  const [page, setPage] = useState(0)
  const [selectedHour, setSelectedHour] = useState(null)

  console.log(selectedHour);

  const HomePage = () => {
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
            borderRadius: 10,
            borderWidth: 1
          }}>
            <FastImage
              style={{
                width: '100%',
                height: 150,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }}
              source={{
                uri: `${imgURL}`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
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
                borderRadius: 10,
                marginTop: 10,
                color: 'black'
              }}>₺ {price}</Text>
              <TouchableOpacity style={{
                width: 70,
                height: 40,
                position: 'absolute',
                right: 10,
                alignItems: 'center',
                top: 10
              }} onPress={() => { handleFavoriteButtonPress(id, title, city, price, imgURL) }}>
                {
                  isIdInInitialState(id) ? <Icon name="heart" size={30} style={{ color: 'rgb(237, 176, 7)' }} /> : <Icon name="heart-outline" size={30} style={{ color: 'rgb(237, 176, 7)' }} />
                }
              </TouchableOpacity>
            </View>
            <View style={{
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: 20,
              marginVertical: 10
            }}>
              <TouchableOpacity onPress={() => { navigation.navigate('TabNavigation', { screen: 'Rezervasyon' }) }} style={{
                borderWidth: 1,
                borderColor: '#0cc45c',
                backgroundColor: '#b4e6c2',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 20,
                width: '40%'
              }}>
                <Text style={{ color: '#0cc45c', fontFamily: 'Inter-Bold' }}>Rezervasyon</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            marginTop: 10,
            backgroundColor: 'rgb(240, 238, 230)',
            borderColor: 'rgb(217, 213, 169)',
            marginHorizontal: 10,
            paddingVertical: 10,
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}>
              <View style={{
                alignItems: 'center',
                borderColor: '#80d79b',
                borderWidth: 1,
                marginLeft: 10,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 5,
                backgroundColor: 'rgb(211, 244, 216)'
              }}>
                <Icon name="clock-time-three-outline" size={20} style={{ color: '#0cc45c' }} />
                <Text style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                  color: '#0cc45c'
                }}>Çalışma Saatleri</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Inter-Bold', color: '#0cc45c' }}>09:30 - 22:00</Text>
              </View>
              <TouchableOpacity onPress={() => setPage(1)} style={{
                alignItems: 'center',
                borderColor: 'rgb(237, 176, 7)',
                borderWidth: 1,
                marginLeft: 100,
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderRadius: 5,
                backgroundColor: 'rgb(240, 238, 230)'
              }}>
                <Icon name="qrcode-scan" size={20} style={{ color: 'rgb(212, 123, 51)' }} />
                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>QR KOD</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ClockCarousel hours={hours} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
          <Menu data={Menu_data} />
          <Comment data={Comment_data} page={page} setPage={setPage} />
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <>
      {page === 0 && <HomePage />}
      {page === 1 && <QRMenu goBack={() => setPage(0)} />}
      {/* {page === 2 && <Comment2 goBack={() => setPage(0)} data={Comment_data} />} */}
    </>
  )
};

export default RestorantDetailScreen;

/*
Sorunlar
- bu store'dan rezervasyonların çekilmesi ve Rezervasyonlarım sayfasında görüntülenmesi
- Saatin çalışma saatlerine uygun olması gerekmesi (BACKEND ile ortak)
- Yorumlar kısımlarının tasarlanması (Bence Menu kısmının ayrıntılı olmasına gerek yok)
*/