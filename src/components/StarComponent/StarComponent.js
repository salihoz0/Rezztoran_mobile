import { View, Text } from 'react-native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StarComponentStyles';
const StarComponent = ({ count, select, comment }) => {
  return select == 'star' ? (
    <View>
      <Stars
        default={count}
        count={5}
        half={true}
        disabled={true}
        starSize={50}
        fullStar={<Icon name="star" size={comment ? 10 : 20} style={[styles.myStarStyle]} />}
        emptyStar={
          <Icon
            name="star-o"
            size={comment ? 10 : 20}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
        halfStar={
          <Icon size={comment ? 10 : 20} name="star-half-empty" style={[styles.myStarStyle]} />
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
        fullStar={<Text style={[styles.priceStyle]}>{'\u20BA'}</Text>}
        emptyStar={<Text></Text>}
      />
    </View>
  );
};

export default StarComponent;
