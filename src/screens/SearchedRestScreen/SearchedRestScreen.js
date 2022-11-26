import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import Restorants from '../../components/CustomRestorant/Restorants';
import {useNavigation} from '@react-navigation/native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const SearchedRestScreen = props => {
  const data = props.route.params.data;
  const navigation = useNavigation();


  return (
    <ImageBackground source={backgr} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.carouselImage}>
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
});

export default SearchedRestScreen;
