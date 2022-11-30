import React from 'react';
import {View, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './Restorants.style';

const Restorants = ({Restorant}) => {
  const navigation = useNavigation();

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
      </Pressable>
    </View>
  );
};

export default Restorants;
