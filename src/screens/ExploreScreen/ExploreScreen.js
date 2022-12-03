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
import Menu from '../../components/SortMenu';
import data from '../../../assets/Data/Restorant_data.json';
import styles from './ExploreScreenStyles';

/* Tab bar daki arayın ikonunana basınca buraya geliyor ,eskiden searchedScreene yönlendiriyorduk ama searched screende normalde aranan değeri route.params komutu 
ile alıyor ama biz arama yapmadığımız için herhangi bir değer gelmiyor hata veriyordu,ne yaptıysam çözemedim bende aynı iki tane sayfa oluşturdum bundaki datamız
direkt restorant data searched screendeki de CustomSearchbar dan gelen data */

const ExploreScreen = props => {
  const navigation = useNavigation();
  const [filterMenuShow, setFilterMenuShow] = useState(false);
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
            <Menu data={data} />
          </View>
          <Pressable
            style={styles.icon}
            onPress={() => setFilterMenuShow(!filterMenuShow)}>
            <View style={styles.inner_icon}>
              <Icon name="filter-outline" size={35} color={'gray'} />
              <Text style={styles.text}>Filtrele</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.flatlist_container}>
          <FlatList
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
                        size={20}
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
    </ImageBackground>
  );
};

export default ExploreScreen;
