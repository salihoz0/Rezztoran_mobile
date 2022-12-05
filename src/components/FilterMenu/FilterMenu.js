import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, TouchableOpacity} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FilterMenuStyles';
import Modal from 'react-native-modal';
import Restoran_data from '../../../assets/Data/Restorant_data.json';
import {Button} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import City_data from '../../../assets/Data/City_data.json';

const FilterMenu = props => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [a, SetA] = useState(0);
  const [list, setList] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [category, setCategory] = useState('');
  const [selected, setSelected] = useState(0);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setSelected(0);
    setCategory('');
    setSelectedCity('');
  };
  const Cities = [...City_data].sort((a, b) => a.key - b.key); //şehirleri plaka numarasına(key) göre sıralıyor

  toggleModalWithFilter = () => {
    setModalVisible(!isModalVisible);
    handleFilter();
    SetA(1);
  };

  const FilterClear = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate('SearchedRest', {data: Restoran_data});
    setSelected(0);
    setCategory('');
    setSelectedCity('');
  };
  const handleFilter = () => {
    const filteredListCategory = props.data.filter(Category => {
      const currentCategory = Category.category;

      return currentCategory.indexOf(category) > -1;
    });
    const filteredListCity = filteredListCategory.filter(City => {
      const currentCity = City.city;

      return currentCity.indexOf(selectedCity) > -1;
    });
    setList(filteredListCity);
  };
  useEffect(() => {
    a > 0
      ? navigation.navigate('SearchedRest', {data: list})
      : console.log('x');
  }, [list]);

  return (
    <View>
      <Pressable style={styles.icon} onPress={toggleModal}>
        <View style={styles.inner_icon}>
          <Icon name="filter-outline" size={35} color={'gray'} />
          <Text style={styles.text}>Filtrele</Text>
        </View>
        <Modal
          isVisible={isModalVisible}
          backdropColor={'white'}
          backdropOpacity={1}
          animationInTiming={2}
          animationIn="slideInRight"
          animationOut="slideOutRight">
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => FilterClear()}>
              <Text style={{color: '#42a5f5'}}>Filtreleri temizle</Text>
            </TouchableOpacity>
            <View style={styles.Modalitem}>
              <Text style={styles.Modaltitle}>Şehir Seç</Text>
              <SelectList
                searchPlaceholder={'Şehir Seç'}
                placeholder={'Şehir Seç'}
                data={Cities}
                save="value"
                dropdownTextStyles={{color: 'black'}}
                notFoundText={'Türkiyede yaşadığınıza emin misiniz?'}
                setSelected={setSelectedCity}
              />
            </View>
            <View>
              <Text style={styles.Modaltitle}>Mutfaklar</Text>
              <View style={styles.ModalAllCategory}>
                <TouchableOpacity
                  onPress={() => {
                    setCategory('Et');
                    setSelected(1);
                  }}
                  style={styles.Modalcategory}>
                  <Text style={{color: selected === 1 ? 'blue' : 'black'}}>
                    Et
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCategory('Çin Mutfağı');
                    setSelected(2);
                  }}
                  style={styles.Modalcategory}>
                  <Text style={{color: selected === 2 ? 'blue' : 'black'}}>
                    Çin Mutfağı
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCategory('Pastane');
                    setSelected(3);
                  }}
                  style={styles.Modalcategory}>
                  <Text style={{color: selected === 3 ? 'blue' : 'black'}}>
                    Pastane
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCategory('İtalyan Mutfağı');
                    setSelected(4);
                  }}
                  style={styles.Modalcategory}>
                  <Text style={{color: selected === 4 ? 'blue' : 'black'}}>
                    İtalyan Mutfağı
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCategory('Amerikan Mutfağı');
                    setSelected(5);
                  }}
                  style={styles.Modalcategory}>
                  <Text style={{color: selected === 5 ? 'blue' : 'black'}}>
                    Amerikan Mutfağı
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCategory('Vejeteryan');
                    setSelected(6);
                  }}
                  style={styles.Modalcategory}>
                  <Text style={{color: selected === 6 ? 'blue' : 'black'}}>
                    Vejeteryan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View></View>

            <Button
              onPress={toggleModalWithFilter}
              mode={'contained'}
              style={styles.button}>
              Filtrele
            </Button>
            <Button
              buttonColor="#DD7272"
              onPress={toggleModal}
              mode={'contained'}
              style={styles.button}>
              İptal
            </Button>
          </View>
        </Modal>
      </Pressable>
    </View>
  );
};

export default FilterMenu;
