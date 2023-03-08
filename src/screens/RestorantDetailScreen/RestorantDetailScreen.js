import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,

} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import QRMenu from '../../components/QRMenu';
import ClockCarousel from '../../components/ClockCarousel';

const RestorantDetailScreen = props => {
  const { imgURL, title, city, star, price, id } = props.data
  const { goBack, handleFavoriteButtonPress, isIdInInitialState } = props
  const navigation = useNavigation();
  const [page, setPage] = useState(0)

  const HomePage = () => {
    return (
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFFFFF' }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Detay</Text>
          <TouchableOpacity onPress={goBack} >
            <Icon name="home" size={30} style={{ color: 'rgb(212, 123, 51)' }} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#E1E1E1',
            marginBottom: 12,
            alignItems: "center",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>

          <Card style={{ marginHorizontal: 10, marginTop: 20, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)' }}>
            <Card.Cover source={{ uri: `${imgURL}` }} />
            <Card.Content>
              <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 25, fontFamily: 'Poppins-Medium', color: 'black', marginTop: 10, width: 200 }}>{title}</Text>
              <Text style={{ fontSize: 15, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>{city}</Text>
              <Text style={{ backgroundColor: 'rgb(237, 176, 7)', width: 70, paddingVertical: 5, paddingLeft: 5, borderRadius: 10, marginTop: 10, color: 'black' }}>₺ {price}</Text>
              <TouchableOpacity style={{ width: 70, height: 40, position: 'absolute', right: 10, alignItems: 'center', top: 10 }} onPress={() => { handleFavoriteButtonPress(id, title, city, price, imgURL) }}>
                {
                  isIdInInitialState(id) ? <Icon name="heart" size={30} style={{ color: 'rgb(237, 176, 7)' }} /> : <Icon name="heart-outline" size={30} style={{ color: 'rgb(237, 176, 7)' }} />
                }
              </TouchableOpacity>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity onPress={() => { navigation.navigate('TabNavigation', { screen: 'Rezervasyon' }) }} style={{ borderWidth: 1, borderColor: '#0cc45c', backgroundColor: '#b4e6c2', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 20, marginRight: 10 }}>
                <Text style={{ color: '#0cc45c', fontFamily: 'Inter-Bold' }}>Rezervasyon</Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
          <Card style={{ marginTop: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)', marginHorizontal: 10, alignItems: 'center' }}>
            <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <View style={{ alignItems: 'center', borderColor: '#80d79b', borderWidth: 1, marginLeft: 10, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5, backgroundColor: 'rgb(211, 244, 216)' }}>
                <Icon name="clock-time-three-outline" size={20} style={{ color: '#0cc45c' }} />
                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium', color: '#0cc45c' }}>Çalışma Saatleri</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Inter-Bold', color: '#0cc45c' }}>09:30 - 22:00</Text>
              </View>
              <TouchableOpacity onPress={() => setPage(1)} style={{ alignItems: 'center', borderColor: 'rgb(237, 176, 7)', borderWidth: 1, marginLeft: 100, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5, backgroundColor: 'rgb(240, 238, 230)' }}>
                <Icon name="qrcode-scan" size={20} style={{ color: 'rgb(212, 123, 51)' }} />
                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>QR KOD</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <ClockCarousel />
          <View style={{ marginTop: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)', marginHorizontal: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: 10 }}>
            <TouchableOpacity style={{ alignItems: 'center', borderColor: 'rgb(237, 176, 7)', borderWidth: 1, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5, backgroundColor: 'rgb(240, 238, 230)' }}>
              <Text>Yorumlar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', borderColor: 'rgb(237, 176, 7)', borderWidth: 1, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5, backgroundColor: 'rgb(240, 238, 230)' }}>
              <Text>Menü</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView >
    )
  }

  return (
    <>
      {page === 0 && <HomePage />}
      {page === 1 && <QRMenu goBack={() => setPage(0)} />}
    </>
  )
};

export default RestorantDetailScreen;

/*
Sorunlar
- Rezervasyon yap butonuna tıklayınca restorana not gönderip rezerve yapması ve store'a kaydetmesi
bu store'dan rezervasyonların çekilmesi ve Rezervasyonlarım sayfasında görüntülenmesi
- QR Kod sayfasının tasarlanması
- Saatin çalışma saatlerine uygun olması gerekmesi (BACKEND ile ortak)
- uygun olan saatlerin farklı renkte gösterilmesi ve o saati seçince yeşil renkte yanması
- Yorumlar ve Menu kısımlarının tasarlanması (Bence Menu kısmının ayrıntılı olmasına gerek yok)
- Stillendirmeler.
*/