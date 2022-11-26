import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../components/CustomInput';
import StarComponent from '../../components/StarComponent';
import backgr from '../../../assets/images/arkaplan.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReservationScreen = () => {
  const [price, setPrice] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirm = time => {
    console.log('A date has been picked: ', time);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <ImageBackground source={backgr} style={styles.backgr}>
      <View style={styles.container}>
        <View style={styles.starAndPrice}>
          <StarComponent title="Restorant yıldızı seç" />
          <CustomInput
            value={price}
            setValue={price}
            placeholder="Price $"
            placeholderTextColor="black"
            type="PRICE"
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
            />
          </Pressable>
        </View>
      </View>
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
});

export default ReservationScreen;
