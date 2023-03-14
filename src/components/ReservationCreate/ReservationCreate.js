import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';
import {hours} from '../../screens/RestorantDetailScreen/tmpData';
import {persons} from './tmpPersons';
import {useDispatch, useSelector} from 'react-redux';
import styles from './ReservationCreateStyles';
import ClockCarousel from '../ClockCarousel';
import Icon1 from 'react-native-vector-icons/Fontisto';
import {Button} from 'react-native-paper';
import couponData from '../../../assets/Data/Coupon.json';
import Header from '../Header';
import {
  setSort,
  setFilter,
  setNumOfPeople,
  setReservationDate,
} from '../../store/searchEngineStore';

import Calendar from '../Calendar';
import {ScrollView} from 'react-native-gesture-handler';
const DateTimePicker = () => {
  const [selected, setSelected] = useState('2');
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedPersons, setSelectedPersons] = useState(null);
  const [note, setNote] = useState(' ');
  const [pressed, setPressed] = useState(false);
  const [coupon, setCoupon] = useState(' ');
  const [couponDetail, setcouponDetail] = useState(' ');
  const [couponDetailCode, setcouponDetailCode] = useState(' ');
  const {sortData, filterData, numOfPeople, reservationDate} = useSelector(
    state => state.searchEngineStore,
  );
  const dispatch = useDispatch();

  const handleReservationDate = date => {
    dispatch(
      setReservationDate({
        reservationDate: date,
      }),
    );
  };

  const reservationCreate = () => [
    //verileri alıp rezervasyonlarım sayfasına gönder
  ];

  const couponTest = couponCode => {
    setPressed(true);
    const couponDetail = couponData.filter(coupon => {
      return coupon.couponCode === couponCode;
    });

    const couponDetailCode = couponDetail.map(coupon => coupon.couponCode);
    const couponDetailText = couponDetail.map(coupon => coupon.coupon);
    setcouponDetailCode(couponDetailCode);
    setcouponDetail(couponDetailText);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
      <Header title="Rezervasyon Yap" />

        <View>
          <ClockCarousel
            hours={hours}
            selectedHour={selectedHour}
            setSelectedHour={setSelectedHour}
            
          />
          <ClockCarousel
            hours={persons}
            selectedHour={selectedPersons}
            setSelectedHour={setSelectedPersons}
            
          />
          <View ></View>
          <Calendar
            style={styles.textinput}
            handleReservationDate={handleReservationDate}
            reservationDate={reservationDate}
          />

          <TextInput
            style={styles.textinput}
            placeholder={'Notunuzu girebilirsiniz'}
            multiline
            onChangeText={text => setNote(text)}
            autoCapitalize={'sentences'}
          />
          <View style={styles.coupon}>
            <View>
              <TextInput
                style={styles.textinputCoupon}
                placeholder={'Kupon kodunu giriniz'}
                multiline
                onChangeText={text => setCoupon(text)}
                autoCorrect={false}
                autoCapitalize={'characters'}
              />
            </View>

            <Icon1 name="ticket" size={25} color="green" />
          </View>
          <Button
            mode="contained"
            onPress={() => couponTest(coupon)}
            textColor="black"
            style={styles.couponButton}>
            Kupon Doğrula
          </Button>
          {pressed ? (
            couponDetailCode == coupon ? (
              <Text style={styles.couponCorrect}>{couponDetail}</Text>
            ) : (
              <Text style={styles.couponWrong}>Kopun geçersiz</Text>
            )
          ) : null}
        </View>
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => reservationCreate}
        textColor="black">
        ONAYLA
      </Button>
    </ScrollView>
  );
};

export default DateTimePicker;
