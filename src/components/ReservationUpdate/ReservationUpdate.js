import React, {useState} from 'react';
import {View, TextInput,ToastAndroid} from 'react-native';
import {hours} from '../../screens/RestorantDetailScreen/tmpData';
import {persons} from './tmpPersons';
import {useDispatch, useSelector} from 'react-redux';
import styles from './ReservationUpdateStyles';
import ClockCarousel from '../ClockCarousel';
import {Button} from 'react-native-paper';
import Header from '../Header';
import {useUpdate} from '../../api/reserve';
import Calendar from '../Calendar';
import {ScrollView} from 'react-native-gesture-handler';
const ReservationUpdate = ({restaurantId, id}) => {
  const [reservationTime, setSelectedHour] = useState(null);
  const [reservationDate, setSelectedDate] = useState(null);
  const [personCount, setSelectedPersons] = useState(null);
  const [note, setNote] = useState('');
  const [phone, setPhone] = useState('');
  const {mutate: update} = useUpdate();
  const {myDetails} = useSelector(state => state.authStore);
  const userId = myDetails.id;
  const reservUpdate = async (
    values = {
      id,
      userId,
      bookingStatus,
      restaurantId,
      reservationDate,
      reservationTime,
      note,
      phone,
      personCount,
    },
  ) => {
    new Promise((resolve, reject) => {
      update(values, {
        onSuccess: data => {
          ToastAndroid.show('Rezervasyon güncellendi',ToastAndroid.SHORT)
        },
        onError: error => {
          ToastAndroid.show('Rezervasyon güncellenemedi',ToastAndroid.SHORT)
        },
      });
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header title="Rezervasyon Düzenle" />

        <View>
          <ClockCarousel
            hours={hours}
            selectedHour={reservationTime}
            setSelectedHour={setSelectedHour}
          />
          <ClockCarousel
            hours={persons}
            selectedHour={personCount}
            setSelectedHour={setSelectedPersons}
          />
          <Calendar
            style={styles.textinput}
            handleReservationDate={setSelectedDate}
            reservationDate={reservationDate}
          />

          <TextInput
            style={styles.textinput}
            placeholder={'Notunuzu girebilirsiniz'}
            multiline
            onChangeText={text => setNote(text)}
            autoCapitalize={'sentences'}
          />
          <TextInput
            style={styles.textinput}
            placeholder={'İletişim numarası'}
            multiline
            onChangeText={text => setPhone(text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() =>
          reservUpdate({
            id: id,
            userId: userId,
            bookingStatus: "PENDING",
            restaurantId: restaurantId,
            reservationDate: reservationDate?.dateString,
            reservationTime: reservationTime?.label,
            note: note,
            phone: phone,
            personCount: personCount?.label,
          })
        }
        textColor="black">
        ONAYLA
      </Button>
    </ScrollView>
  );
};

export default ReservationUpdate;
