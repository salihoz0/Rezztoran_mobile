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
import {SelectList} from 'react-native-dropdown-select-list';
import City_data from '../../../assets/Data/City_data.json';
import { Modal } from 'react-native-paper';



const SearchedRestScreen = props => {
  const data = props.route.params.data;
  const navigation = useNavigation();
  const [filterMenuShow, setFilterMenuShow] = useState(false);

  return (
    <ImageBackground source={backgr} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.carouselImage}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.icon}>
              <Pressable onPress={()=>setFilterMenuShow(!filterMenuShow)}>
              {!filterMenuShow ? (
              <Icon name="filter-menu" size={30} color={'gray'} />
            ) : (
              <Icon name="filter-remove" size={30} color={'gray'} />
            )}
              </Pressable>
            </View>
          </View>
           
          <Modal style={{zIndex:2}}
          visible={filterMenuShow} 
          animationType="fade">
            <SelectList
              dropdownShown={false}
              placeholder={'Şehirinizi Seçin'}
              maxHeight={100}
              boxStyles={{backgroundColor: 'white', margin: 3,width:220,zIndex:2,alignSelf:'flex-start',}}
              dropdownStyles={{backgroundColor: 'white',zIndex:2,width:220,}}
              setSelected={val => setSelectedCity(val)}
              save="value"
              data={City_data}
              dropdownItemStyles={{
                borderWidth: 0.3,
                borderRadius: 10,
                margin: 3,
                width:210,  
                zIndex:2,
                alignSelf:'flex-start'
              }}
            />
          </Modal>
    
 
      </View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={styles.title}>{item.title} </Text>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate('RestorantDetail', {
                        title: item.title,
                      });
                    }}
                    pressRetentionOffset>
                    <Image style={styles.image} source={{uri: item.imgURL}} />
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
  },
  icon: {
    width: Dimensions.get('window').width / 2,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  inner_Menu: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor:'white',
    marginTop:30,
    borderRadius:40,
  },
});

export default SearchedRestScreen;
