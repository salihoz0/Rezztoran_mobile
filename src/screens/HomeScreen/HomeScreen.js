import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
} from "react-native";
import Restaurants_data from "../../../assets/Data/Restorant_data.json";
import CarouselComponent from "../../components/CarouselComponent";
import CustomInput from "../../components/CustomInput";
import StarComponent from "../../components/StarComponent";
import backgr from "../../../assets/images/arkaplan.png";
import SearchBar from "../../components/CustomSearchBar/CustomSearchBar";
const HomeScreen = () => {


  return (
    <ImageBackground source={backgr} style={styles.backgr}>
    <ScrollView >
      <View style={styles.container}>
        <View>
        <SearchBar />
          
          </View>
        </View>
        <View style={styles.carousel}>
          <CarouselComponent
            data={Restaurants_data}
            icon="heart"
            iconColor="red"
            title="En Çok Sevilenler"
          />
          <CarouselComponent
            data={Restaurants_data}
            icon="star"
            iconColor="yellow"
            title="En Populerler"
          />
        </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  starAndPrice: {
    margin: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
  },
  carousel:{
    marginTop: 10,
    flex:1,
  },  
  backgr: {
    flex: 1,
    zIndex:0
  },
});

export default HomeScreen;
