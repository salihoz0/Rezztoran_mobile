import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';
import backgr from '../../../assets/images/arkaplan.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import data from '../../../assets/Data/NumberOfPeople_data.json';
import moment from 'moment';
import styles from './ReservationCreateStyles';
const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selected, setSelected] = useState('2');
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
  const placeholder = () => {
    return (
      <View style={styles.numberTextContain}>
          <Icon name="person-add" size={30} color={'black'} />
          <Text style={styles.numberText}>  {selected} Kişi</Text>
       
      </View>
    );
  };
  return (
    <ImageBackground source={backgr} style={styles.backgr}>
      <View style={styles.container}>
        <View style={styles.number}>
          <SelectList
            search={false}
            dropdownShown={false}
            placeholder={placeholder()}
            defaultOption={1}
            dropdownTextStyles={{color:'red',fontSize:15,fontWeight:'bold'}}
            inputStyles={{color:'red',alignSelf:'center'}}
            boxStyles={{backgroundColor: 'white',}}
            dropdownStyles={{backgroundColor: 'white'}}
            setSelected={val => setSelected(val)}
            save="value"
            data={data}
            arrowicon={<Icon name="keyboard-arrow-down" size={30} color={'black'} />}
            dropdownItemStyles={{marginLeft: 8,borderBottomWidth:0.3,marginRight: 8}}
          />
        </View>

        <View>
          <Pressable onPress={showDatePicker} style={styles.datePick}>
            <View style={styles.datePickInner}>
              <Icon name="calendar-today" size={30} color={'black'} />
              <Text style={styles.datePickText}>
                {' '}
                {new Date().getDate()}/{new Date().getMonth()}/
                {new Date().getFullYear()}{' '}
              </Text>
            </View>
            <Icon name="keyboard-arrow-down" size={30} color={'black'} />

            <DateTimePickerModal
              is24Hour
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
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
