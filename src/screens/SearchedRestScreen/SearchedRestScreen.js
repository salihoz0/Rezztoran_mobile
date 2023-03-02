import React, {useState} from 'react';
import {
  Text,
  FlatList,
  View,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarComponent from '../../components/StarComponent';
import SearchBar from '../../components/CustomSearchBar/CustomSearchBar';
import SortMenu from '../../components/SortMenu';
import styles from './SearchedRestScreenStyles';
import BlurLogo from '../../../assets/images/rezztoran_logo_blur.png';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import bg from '../../../assets/images/arkaplan.png'

const SearchedRestScreen = props => {
  const data = props.route.params.data;
  const navigation = useNavigation();
  const [liked, setLiked] = useState(data.liked);


  return (
    <ImageBackground source={backgr} style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Keşfedin</Text>
      </View>
      <SearchBar />
      <View style={{flexDirection: 'row'}}>
        <View>
          <SortMenu data={data} />
        </View>
        <FilterMenu data={data} />
      </View>
      <View style={styles.flatlist_container}>
        <FlatList
          style={{marginBottom: 30}}
          data={data}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.flatlist}>
              <View>
                <Pressable
                  onPress={() => {
                    navigation.navigate('RestorantDetail', {
                      title: item.title,
                      star: item.star,
                      price: item.price,
                    });
                  }}
                  pressRetentionOffset>
                  <Image style={styles.image} source={{uri: item.imgURL}} />
                  <Text style={styles.likednumber}>{item.star}</Text>

                  <Text style={styles.title}>{item.title} </Text>
                  <View style={styles.starAndPrice}>
                    <StarComponent count={item.star} select={'star'} />
                    <StarComponent count={item.price} />
                  </View>
                  <Pressable
                    onPress={() => (
                      setLiked(isLiked => !isLiked),
                      (item.liked = !item.liked)
                    )}
                    style={styles.like}
                    pressRetentionOffset>
                    <Icon
                      name={'heart'}
                      size={25}
                      color={item.liked ? 'red' : 'white'}
                      style={styles.like}
                    />
                  </Pressable>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
    <Image
      source={BlurLogo}
      resizeMode={'contain'}
      style={styles.blur_logo}
    />
  </ImageBackground>
  );
};

export default SearchedRestScreen;
