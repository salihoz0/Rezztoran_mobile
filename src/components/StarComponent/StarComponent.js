import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarComponent = () => {
  return (
    <View>
      <Stars
        default={2.5}
        count={5}
        half={true}
        starSize={50}
        fullStar={<Icon name="star" size={20} style={[styles.myStarStyle]} />}
        emptyStar={
          <Icon
            name="star-o"
            size={20}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
        halfStar={
          <Icon size={20} name="star-half-empty" style={[styles.myStarStyle]} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});

export default StarComponent;
