import React, {useState} from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Restorants.style';

const Restorants = ({Restorant}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('RestorantDetail', {title: Restorant.title});
        }}
        pressRetentionOffset>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: Restorant.imgURL}} />
        </View>
        <Text style={styles.text}>{Restorant.point}</Text>
        <Pressable
          onPress={() => setLiked(isLiked => !isLiked)}
          style={styles.like}>
          <Icon
            name={liked ? 'heart' : 'heart'}
            size={20}
            color={liked ? 'red' : 'black'}
            style={styles.like}
          />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default Restorants;
