import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Clipboard from '@react-native-clipboard/clipboard';
import Data from '../../../assets/Data/Coupon.json';
import styles from './CouponStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Coupon = () => {
  const CopyToClipBoard = item => {
    Clipboard.setString(item);
    ToastAndroid.show('Kopyalandı', ToastAndroid.SHORT);
  };

  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{item.restoran}</Text>
            <Image source={{uri: item.imgURL}} style={styles.image} />
          </View>
          <View style={styles.couponContainer}>
            <View style={styles.couponInnerContainer}>
              <Text style={styles.coupon}>{item.coupon}</Text>
              <Icon name={item.Icon} size={25} color="green" />
            </View>
            <View style={styles.couponCodeContainer}>
              <Text style={styles.couponCode}>{item.couponCode}</Text>
              <TouchableOpacity
                onPress={() => CopyToClipBoard(item.couponCode)}>
                <Icon name="copy" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList data={Data} renderItem={renderItem} />
    </View>
  );
};

export default Coupon;
