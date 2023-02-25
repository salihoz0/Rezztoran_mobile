import {View, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Restorants from '../CustomRestorant/Restorants';
import StarComponent from '../StarComponent/StarComponent';
import styles from './CarouselComponent.style';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const CarouselComponent = ({data}) => {
  const width = Dimensions.get('window').width;
  const renderItem = ({item}) => {
    return (
      <Card mode='elevated'>
        <Restorants Restorant={item} />
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>{item.title}</Text>
        </Card.Content>
        <Card.Content style={styles.star}>
          <StarComponent count={item.star} select={'star'} />
          <StarComponent count={item.price} />
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Carousel
          loop
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