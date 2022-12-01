import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarComponent = ({count, select,}) => {
  return select == "star" ? (
    <View>
      <Stars
        default={count}
        count={5}
        half={true}
        disabled={true}
        starSize={50}
        fullStar={<Icon name="star" size={20}  style={[styles.myStarStyle]} />}
        emptyStar={
          <Icon
            name="star-o"
            size={20}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
        halfStar={
          
          <Icon size={20} name="star-half-empty"  style={[styles.myStarStyle]} />
        }
      />
    </View>
  ) : (
    <View>
      <Stars
        default={count}
        count={3}
        half={true}
        disabled={true}
        starSize={50}
        fullStar={<Text  style={[styles.priceStyle]}>{'\u20BA'}</Text>}
        emptyStar={<Text></Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myStarStyle: {
    color:'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,

  },
  priceStyle:{
    color:'black',
    fontSize:20
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  text: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default StarComponent;
