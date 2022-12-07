import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Restorants from '../CustomRestorant/Restorants';
import StarComponent from '../StarComponent/StarComponent';
import styles from './CarouselComponent.style';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const CarouselComponent = ({data}) => {
  const width = Dimensions.get('window').width;
  const renderItem = ({item}) => {
    return (
      <View>
        <Restorants Restorant={item} />
        <Text style={styles.titleImage}>{item.title}</Text>
        <View style={styles.star}>
          <StarComponent count={item.star} select={'star'} />
          <StarComponent count={item.price} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Carousel
          loop
          style={styles.carousel}
          width={width}
          mode="parallax"
          height={width / 1.6}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={2000}
          renderItem={renderItem}
        />
      </GestureHandlerRootView>
    </View>
  );
};

export default CarouselComponent;
