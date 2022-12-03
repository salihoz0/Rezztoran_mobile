import React, {useState} from 'react';
import {
  Text,
  FlatList,
  View,
  ImageBackground,
  Image,
  Pressable,
  Button,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarComponent from '../../components/StarComponent';
import SearchBar from '../../components/CustomSearchBar/CustomSearchBar';
import Menu from '../../components/SortMenu';
import data from '../../../assets/Data/Restorant_data.json';
import styles from './ExploreScreenStyles';
import BlurLogo from '../../../assets/images/rezztoran_logo_blur.png';
import Modal from 'react-native-modal';

/* Tab bar daki arayın ikonunana basınca buraya geliyor ,eskiden searchedScreene yönlendiriyorduk ama searched screende normalde aranan değeri route.params komutu 
ile alıyor ama biz arama yapmadığımız için herhangi bir değer gelmiyor hata veriyordu,ne yaptıysam çözemedim bende aynı iki tane sayfa oluşturdum bundaki datamız
direkt restorant data searched screendeki de CustomSearchbar dan gelen data */

const ExploreScreen = props => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(data.liked);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSearch = text => {
    const filteredList = data.filter(Restorant => {
      const searchedText = text.toLowerCase();
      const currentTitle = Restorant.title.toLowerCase();
      const currentcate = Restorant.category.toLowerCase();
      const currentcity = Restorant.city.toLowerCase();

      return (
        currentTitle.indexOf(searchedText) > -1 ||
        currentcate.indexOf(searchedText) > -1 ||
        currentcity.indexOf(searchedText) > -1
      );
    });

    const filteredListCategory = filteredList.filter(Category => {
      const currentCategory = Category.category;

      return currentCategory.indexOf(selectedCategory) > -1;
    });

    const filteredListCity = filteredListCategory.filter(Cities => {
      const currentCity = Cities.city;

      return currentCity.indexOf(selectedCity) > -1;
    });

    setList(filteredListCity);
  };

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
          <Pressable style={styles.icon} onPress={toggleModal}>
            <View style={styles.inner_icon}>
              <Icon name="filter-outline" size={35} color={'gray'} />
              <Text style={styles.text}>Filtrele</Text>
            </View>
            <Modal
              isVisible={isModalVisible}
              backdropColor={'white'}
              backdropOpacity={1}
              animationIn="slideInRight"
              animationOut="slideOutRight">
              <View style={{flex: 1}}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={toggleModal} />
              </View>
            </Modal>
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
      <Image
        source={BlurLogo}
        resizeMode={'contain'}
        style={styles.blur_logo}
      />
    </ImageBackground>
  );
};

export default ExploreScreen;
