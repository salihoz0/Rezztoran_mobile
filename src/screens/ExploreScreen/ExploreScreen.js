import React, {useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import Restorants from '../../components/CustomRestorant/Restorants';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarComponent from '../../components/StarComponent';
import SearchBar from '../../components/CustomSearchBar/CustomSearchBar';
import Menu from '../../components/SortMenu';
import data from '../../../assets/Data/Restorant_data.json';

/* Tab bar daki arayın ikonunana basınca buraya geliyor ,eskiden searchedScreene yönlendiriyorduk ama searched screende normalde aranan değeri route.params komutu 
ile alıyor ama biz arama yapmadığımız için herhangi bir değer gelmiyor hata veriyordu,ne yaptıysam çözemedim bende aynı iki tane sayfa oluşturdum bundaki datamız
direkt restorant data searched screendeki de CustomSearchbar dan gelen data */

const ExploreScreen = props => {
  const navigation = useNavigation();
  const [filterMenuShow, setFilterMenuShow] = useState(false);
  const [sortMenuShow, setSortMenuShow] = useState(false);
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

                    <Text style={styles.title}>{item.title} </Text>
                    <View
                      style={{
                        alignItems: 'flex-start',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                      }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 2,
  },

  image: {
    borderRadius: 30,
    resizeMode: 'stretch',
    width: Dimensions.get('window').width / 2.3,
    height: Dimensions.get('window').height / 5,
  },
  title: {
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 20,
  },
  icon: {
    width: Dimensions.get('screen').width / 2.3,
    height: 40,
    borderRadius: 20,
    marginTop: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  menu: {
    width: Dimensions.get('screen').width / 2,
    borderRadius: 20,
    marginTop: 40,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  menu_item: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  header: {
    fontSize: 40,
    marginTop: 74,
    marginLeft: 46,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    shadowOpacity: 0.29,
  },
  flatlist: {
    borderRadius: 30,
    width: Dimensions.get('window').width / 2.2,
    height: Dimensions.get('window').height / 4,
    marginTop: 25,
  },
  inner_icon: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  flatlist_container: {
    marginTop: 20,
    marginLeft: 25,
    height: Dimensions.get('window').height / 1.41,
  },
  like: {
    position: 'absolute',
    marginHorizontal: 80,
    borderRadius: 20,
    paddingVertical: 5,
  },
});

export default ExploreScreen;
