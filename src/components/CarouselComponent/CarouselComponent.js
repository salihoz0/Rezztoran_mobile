import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Restorants from '../CustomRestorant/Restorants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './CarouselComponent.style';

const CarouselComponent = ({data, icon, title, iconColor}) => {
  const width = Dimensions.get('window').width;
  // const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.carouselImage}>
          <Restorants Restorant={item} />
        </View>
        <View>
          <Text style={styles.titleImage}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        style={styles.carousel}
        width={width}
        mode="parallax"
        height={width / 1.8}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={2000}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CarouselComponent;
