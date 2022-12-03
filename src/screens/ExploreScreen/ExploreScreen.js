import React, {useState, useCallback} from 'react';
import {
  Text,
  FlatList,
  View,
  ImageBackground,
  Image,
  Pressable,
  Button,
  TextInput,
  TouchableOpacity,
  Picker,
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

// Price ve Yıldız sayısını Range Slider ile yapmaya çalıştım ama kütüphaneleri çalıştıramadım şimdilik bu şekilde kalsın

const ExploreScreen = props => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(data.liked);
  const [isModalVisible, setModalVisible] = useState(false);
  const [place, setPlace] = useState('');
  const [category, setCategory] = useState('Et');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  console.log(category);
  console.log(selected);
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
                <View style={styles.Modalitem}>
                  <Text style={styles.Modaltitle}>Restaurant</Text>
                  <TextInput
                    onChangeText={setPlace}
                    value={place}
                    placeholder="Restoran Giriniz"
                    style={styles.ModalInput}
                  />
                </View>
                <View>
                  <Text style={styles.Modaltitle}>Categoriler</Text>
                  <View style={styles.ModalAllCategory}>
                    <TouchableOpacity
                      onPress={() => {
                        setCategory('Et');
                        setSelected(1);
                      }}
                      style={[
                        styles.Modalcategory,
                        {
                          borderColor: selected === 1 ? 'red' : 'white',
                        },
                      ]}>
                      <Text>Et</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setCategory('Çin Mutfağı');
                        setSelected(2);
                      }}
                      style={[
                        styles.Modalcategory,
                        {
                          borderColor: selected === 2 ? 'red' : 'white',
                        },
                      ]}>
                      <Text>Çin Mutfağı</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setCategory('Pastane');
                        setSelected(3);
                      }}
                      style={[
                        styles.Modalcategory,
                        {
                          borderColor: selected === 3 ? 'red' : 'white',
                        },
                      ]}>
                      <Text>Pastane</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setCategory('İtalyan Mutfağı');
                        setSelected(4);
                      }}
                      style={[
                        styles.Modalcategory,
                        {
                          borderColor: selected === 4 ? 'red' : 'white',
                        },
                      ]}>
                      <Text>İtalyan Mutfağı</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setCategory('Amerikan Mutfağı');
                        setSelected(5);
                      }}
                      style={[
                        styles.Modalcategory,
                        {
                          borderColor: selected === 5 ? 'red' : 'white',
                        },
                      ]}>
                      <Text>Amerikan Mutfağı</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setCategory('Vejeteryan');
                        setSelected(6);
                      }}
                      style={[
                        styles.Modalcategory,
                        {
                          borderColor: selected === 6 ? 'red' : 'white',
                        },
                      ]}>
                      <Text>Vejeteryan</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text style={styles.title}>Price</Text>
                </View>
                <View>
                  <Text style={styles.title}>Yıldız</Text>
                </View>

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
