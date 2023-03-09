import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Reservations from '../../../assets/Data/Reservations.json';
import { useNavigation } from '@react-navigation/native';
import styles from './ReservationsScreensStyles';
import { Button } from 'react-native-paper';


const ReservationsScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.imgURL }} />
        <View style={styles.info_container}>
          <Text style={styles.titleImage}>{item.title}</Text>
          <Text style={styles.info}>{item.Date}</Text>
          <View style={styles.button_container}>
            <Button
              mode="contained"
              buttonColor="#474747"
              textColor={'#F8B95C'}
              compact={true}
              style={styles.content}
              onPress={() => console.log('Rezervasyonu Düzenle')}>
              Düzenle
            </Button>
            <Button
              compact={true}
              mode="contained"
              buttonColor="#DD7272"
              textColor={'white'}
              style={styles.contentCancel}
              onPress={() => console.log('iptal edildi')}>
              İptal Et
            </Button>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Rezervasyonlarım</Text>
      </View>
      <FlatList
        style={{ zIndex: 1 }}
        data={Reservations}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </SafeAreaView >
  );
};

export default ReservationsScreen;