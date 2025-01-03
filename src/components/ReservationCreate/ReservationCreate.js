import React, {useState} from 'react';
import {View, TextInput,ToastAndroid} from 'react-native';
import {hours} from '../../screens/RestorantDetailScreen/tmpData';
import {persons} from './tmpPersons';
import {useDispatch, useSelector} from 'react-redux';
import styles from './ReservationCreateStyles';
import ClockCarousel from '../ClockCarousel';
import {Button} from 'react-native-paper';
import Header from '../Header';
import {useReserve} from '../../api/reserve';
import Calendar from '../Calendar';
import {ScrollView} from 'react-native-gesture-handler';
const ReservationCreate = ({restaurantId}) => {
  const [reservationTime, setSelectedHour] = useState(null);
  const [reservationDate, setSelectedDate] = useState(null);
  const [personCount, setSelectedPersons] = useState(null);
  const [note, setNote] = useState('');
  const [phone, setPhone] = useState('');
  const {mutate: reserve} = useReserve();
  const {myDetails} = useSelector(state => state.authStore);
  const userId = myDetails.id;

  const reservCreate = async (
    values = {
      userId,
      restaurantId,
      reservationDate,
      reservationTime,
      note,
      phone,
      personCount,
    },
  ) => {
    new Promise((resolve, reject) => {
      reserve(values, {
        onSuccess: data => {
          ToastAndroid.show('Rezervasyon oluşturuldu',ToastAndroid.SHORT)
        },
        onError: (error) => {
          ToastAndroid.show('Rezervasyon oluşturulamadı',ToastAndroid.SHORT)
        },
      });
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header title="Rezervasyon Yap" />

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
        onPress={()=>reservCreate(
          ({
            userId:userId,
            restaurantId:restaurantId,
            reservationDate:reservationDate?.dateString,
            reservationTime:reservationTime?.label,
            note:note,
            phone:phone,
            personCount:personCount?.label,
          }),
        )}
        textColor="black">
        ONAYLA
      </Button>
    </ScrollView>
  );
};

export default ReservationCreate;
