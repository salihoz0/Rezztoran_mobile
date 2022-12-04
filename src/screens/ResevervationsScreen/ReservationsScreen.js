import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import Reservations from '../../../assets/Data/Reservations.json';
import StarComponent from '../../components/StarComponent';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ReservationsScreensStyles';
import {Button} from 'react-native-paper';
import BlurLogo from '../../../assets/images/rezztoran_logo_blur.png';

const ReservationsScreen = () => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(Reservations.liked);

  return (
    <ImageBackground source={backgr} style={styles.ImageBackground}>
      <Text style={styles.header}>Rezervasyonlarım</Text>

      <FlatList
        style={{zIndex: 1}}
        data={Reservations}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.container}>
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
                    setLiked(isLiked => !isLiked), (item.liked = !item.liked)
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
            <View>
              <Text style={styles.titleImage}>{item.title}</Text>
              <View style={styles.star}>
                <StarComponent count={item.star} select={'star'} />
                <StarComponent count={item.price} />
              </View>
              <Text style={styles.info}>
                Kişi Sayısı: {item.numberOfPeople}{' '}
              </Text>
              <Text style={styles.info}>{item.Date} </Text>
              <Text style={styles.info}>Notunuz: {item.comment} </Text>
              <View style={styles.button_container}>
                <Button
                  mode="contained"
                  buttonColor="#474747"
                  textColor={'#F8B95C'}
                  compact={true}
                  style={styles.content}
                  onPress={()=> console.log('Rezervasyonu Düzenle')}
                  >
                  Rezervasyonu Düzenle
                </Button>
                <Button
                  compact={true}
                  mode="contained"
                  buttonColor="#DD7272"
                  textColor={'white'}
                  style={styles.contentCancel}
                  onPress={()=>console.log('iptal edildi')}>
                  İptal Et
                </Button>
              </View>
            </View>
          </View>
        )}
      />
      <Image
        source={BlurLogo}
        resizeMode={'contain'}
        style={styles.blur_logo}
      />
    </ImageBackground>
  );
};

export default ReservationsScreen;
