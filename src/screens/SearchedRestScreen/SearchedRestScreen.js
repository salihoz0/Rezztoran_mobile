import React, {useState, useEffect} from 'react';
import {
  Text,
  Button,
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import Restorants from '../../components/CustomRestorant/Restorants';
const SearchedRestScreen = props => {
        const data =props.route.params.data;

  return (
    <ImageBackground source={backgr} style={{flex:1}}>
    <View style={styles.container}>
      <Text>SearchedRestScreen</Text>
      <Text>{data.title}</Text>
      <View style={styles.carouselImage}>
    <FlatList
    data={data}
    renderItem={({item}) => (
        <View >
          <View >
            <Text >{item.title} </Text>
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
    },
  
    carouselImage: {
    flex:1,   
    },
  
    
  });
  

export default SearchedRestScreen;
