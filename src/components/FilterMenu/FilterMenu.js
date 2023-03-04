import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Restoran_data from '../../../assets/Data/Restorant_data.json';
import { SelectList } from 'react-native-dropdown-select-list';
import cities from '../../../assets/Data/City_data.json';
import RadioGroup from 'react-native-radio-buttons-group';

const FilterMenu = props => {
  const { data } = props
  const [isModalVisible, setModalVisible] = useState(false);
  const deviceWidth = Dimensions.get("window").width;
  const [checked, setChecked] = useState('first')
  const [selected, setSelected] = useState([
    { key: 1, label: 'Et', value: 'et' },
    { key: 2, label: 'Çin Mutfağı', value: 'cin-mutfagi' },
    { key: 3, label: 'Pastane', value: 'pastane' },
    { key: 4, label: 'İtalyan Mutfağı', value: 'italyan-mutfagi' },
    { key: 5, label: 'Amerikan Mutfağı', value: 'amerikan-mutfagi' },
    { key: 6, label: 'Türk Mutfağı', value: 'turk-mutfagi' },
    { key: 7, label: 'Vejetaryen', value: 'vejetaryen' },
    { key: 8, label: 'Vegan', value: 'vegan' }
  ]);
  console.log(selected)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function onPressRadioButton(radioButtonsArray) {
    setSelected(radioButtonsArray);
    console.log(radioButtonsArray.find(button => button.selected)?.value);

  }

  return (
    <View>
      <Text>Filtre</Text>
    </View>
  )
};

export default FilterMenu;

/*
<TouchableOpacity
      style={{
        width: Dimensions.get('screen').width / 2.3,
        backgroundColor: 'white',
        marginRight: 13,
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginTop: 10,
        alignItems: 'center',
        elevation: 3,
      }}
      onPress={toggleModal}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="filter-outline" size={30} color={'rgb(212, 123, 51)'} />
        <Text style={{ fontSize: 17, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>Filtrele</Text>
      </View>
      <View style={{ flex: 1 }}>
        <SelectList
          setSelected={setSelected}
          data={cities}
          searchicon={<Icon name="search" size={12} color={'black'} />}
          search={false}
          boxStyles={{ borderRadius: 0 }} //override default styles
        />
        <RadioGroup
          radioButtons={selected}
          onPress={onPressRadioButton}
        />
        <TouchableOpacity onPress={toggleModal}><Text>geri</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
*/