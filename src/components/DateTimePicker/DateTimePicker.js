import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SelectList} from 'react-native-dropdown-select-list';
import backgr from '../../../assets/images/arkaplan.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import data from '../../../assets/Data/NumberOfPeople_data.json';
import moment from 'moment';
import styles from './DateTimePickerStyles'
const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selected, setSelected] = useState('');
  const [dateData, setDateData] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirm = time => {
    let chosentime = moment(time).format('MMMM Do YYYY, h:mm:ss a');
    setDateData(chosentime);
    console.log(chosentime);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const reservationCreate = () => [
    //verileri alıp rezervasyonlarım sayfasına gönder
  ];
  return (
    <ImageBackground source={backgr} style={styles.backgr}>
      <View style={styles.container}>
        <View style={styles.number}>
          <SelectList
            search={false}
            dropdownShown={false}
            placeholder={'Kişi Sayısı'}
            defaultOption={1}
            boxStyles={{backgroundColor: 'white'}}
            dropdownStyles={{backgroundColor: 'white'}}
            setSelected={val => setSelected(val)}
            save="value"
            data={data}
            dropdownItemStyles={{borderWidth: 0.3, borderRadius: 10, margin: 3}}
          />
        </View>

        <View>
          <Pressable onPress={showDatePicker}>
            <Text>Tarih Seç</Text>
            <Icon name="calendar-clock-outline" size={50} color={'gray'} />

            <DateTimePickerModal
              is24Hour
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumTime={22}
            />
          </Pressable>
          <TextInput
            style={styles.textinput}
            placeholder={'Notunuzu girebilirsiniz'}
            multiline
            autoCapitalize={'sentences'}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={reservationCreate}>
        <Text style={styles.text}>ONAYLA</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default DateTimePicker;
