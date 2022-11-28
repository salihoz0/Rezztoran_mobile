import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
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
  const reservationCreate =()=>[
    //verileri alıp rezervasyonlarım sayfasına gönder
  ]
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  starAndPrice: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    marginTop: 10,
    flex: 1,
    height: Dimensions.get('window').height / 1.8,
  },
  backgr: {
    flex: 1,
  },
  number: {
    marginTop: 10,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 8,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 30,
    width: Dimensions.get('window').width,
    borderColor: '#1e88e5',
    backgroundColor: '#e0e0e0',
    margin: 2,
    marginTop: 0,
    height: Dimensions.get('window').height / 15,
  },
  text: {
    fontSize: 20,
    color:'black'
  },
});

export default DateTimePicker;
