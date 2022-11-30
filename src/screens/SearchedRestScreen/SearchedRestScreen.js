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
const SearchedRestScreen = props => {
  const data = props.route.params.data;
  const navigation = useNavigation();
  const [filterMenuShow, setFilterMenuShow] = useState(false);
  const [sortMenuShow, setSortMenuShow] = useState(false);
  const [a, SetA] = useState(0);
  const [b, SetB] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

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
            {!filterMenuShow ? (
              <Icon name="filter-menu" size={35} color={'gray'} />
            ) : (
              <Icon name="filter-remove" size={35} color={'gray'} />
            )}
          </Pressable>
        </View>

        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.flatlist}>
              <View>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('RestorantDetail', {
                      title: item.title,
                    });
                  }}
                  pressRetentionOffset>
                  <Image style={styles.image} source={{uri: item.imgURL}} />
                  <Text style={styles.title}>{item.title} </Text>
                  <StarComponent star={item.star} />
                </TouchableWithoutFeedback>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    margin: 2,
  },

  image: {
    borderRadius: 30,
    resizeMode: 'stretch',
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 5,
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
  },
  icon: {
    width: Dimensions.get('screen').width / 2,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
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
    fontSize: 25,
    paddingLeft: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  flatlist: {
    borderRadius: 30,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 4,
    marginTop: 25,
  },
});

export default SearchedRestScreen;
