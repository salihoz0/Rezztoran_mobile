import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import Reservations from '../../../assets/Data/Reservations.json';
import StarComponent from '../../components/StarComponent';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ReservationsScreensStyles'
const ReservationsScreen = () => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(Reservations.liked);

  return (
    <ImageBackground source={backgr} style={styles.ImageBackground}>
      <Text style={styles.header}>Rezervasyonlarım</Text>
      <FlatList
        data={Reservations}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.Restorants}>
            <View>
              <Pressable
                onPress={() => {
                  navigation.navigate('RestorantDetail', {title: item.title});
                }}
                pressRetentionOffset>
                <View style={styles.Restorants}>
                  <Image style={styles.image} source={{uri: item.imgURL}} />

                  <Text style={styles.text}>{item.star}</Text>
                  <Pressable
                    onPress={() => (
                      setLiked(isLiked => !isLiked),
                      (item.liked = !item.liked)
                    )}
                    style={styles.like}
                    pressRetentionOffset>
                    <Icon
                      name="heart"
                      size={20}
                      color={liked ? 'red' : 'white'}
                      style={styles.like}
                    />
                  </Pressable>
                </View>
              </Pressable>

              <View style={styles.star}>
                <Text style={styles.titleImage}>{item.title}</Text>
                <StarComponent count={item.star} select={'star'} />
                <StarComponent count={item.price} />
              </View >
              <Text style={styles.info}>Kişi Sayısı: {item.numberOfPeople} </Text>
              <Text style={styles.info}>{item.Date} </Text>
              <Text style={styles.info}>Notunuz: {item.comment} </Text>
            </View>
          </View>
        )}
      />
    </ImageBackground>
  );
};


export default ReservationsScreen;
