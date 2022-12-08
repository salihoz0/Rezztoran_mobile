import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import backgr from '../../../assets/images/arkaplan.png';
import Restorant_data from '../../../assets/Data/Restorant_data.json';
import Restorants from '../../components/CustomRestorant/Restorants';
import CustomMenu from '../../components/CustomMenu/CustomMenu';
import ReservationCreate from '../../components/ReservationCreate/ReservationCreate';
import styles from './RestoranDetailScreenStyles';
import StarComponent from '../../components/StarComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RestorantDetailScreen = props => {
  const selectTitle = props.route.params.title;
  const star = props.route.params.star;
  const price = props.route.params.price;
  const [list, setList] = useState(Restorant_data);
  const [showMenu, setShowMenu] = useState(true);
  const renderRestorant = ({item}) => <Restorants Restorant={item} />;

  useEffect(() => {
    const pressed = () => {
      const filteredList = Restorant_data.filter(Restorant => {
        const currentTitle = Restorant.title;
        return currentTitle.indexOf(selectTitle) > -1;
      });
      setList(filteredList);
    };
    pressed();
  }, []);

  return (
    <ImageBackground source={backgr} style={styles.backgr}>
      <View style={styles.container}>
        <View style={{height: hp('28%')}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={list}
            renderItem={renderRestorant}
          />
        </View>
        <View style={{height: hp('12%')}}>
          <Text style={styles.header}>{selectTitle}</Text>
          <View style={styles.info}>
            <StarComponent count={star} select={'star'} />
            <StarComponent count={price} />
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{color: 'black', fontWeight: '700', fontSize: hp(2)}}>
                  Çalışma Saaatleri
                </Text>
                <Icon name="clock-outline" size={25} color={'black'} />
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'black',
                  fontWeight: '500',
                }}>
                09:00-23.00
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Menu}>
          {showMenu ? (
            <CustomMenu />
          ) : (
            <View style={styles.reserve}>
              <ReservationCreate />
            </View>
          )}
        </View>
      </View>
      <View style={{height: hp(7)}}>
        <TouchableOpacity
          onPress={() => {
            setShowMenu(!showMenu);
          }}
          style={showMenu ? styles.button : styles.button_cancel}
          activeOpacity={0.9}>
          {showMenu ? (
            <Text style={styles.text}>REZERVASYON YAP</Text>
          ) : (
            <Text style={styles.text_cancel}>İPTAL ET</Text>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RestorantDetailScreen;
