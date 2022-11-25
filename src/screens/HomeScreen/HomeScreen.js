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
import heart_icon from '../../../assets/images/heart-icon.png';
import backgr from "../../../assets/images/arkaplan.png";
const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState("");
  const [datepicker, setDatepicker] = useState("");
  const [price, setPrice] = useState("");

  return (
    <ImageBackground source={backgr} style={styles.backgr}>
    <ScrollView >
      <View style={styles.container}>
        <View>
          <CustomInput
            value={restaurants}
            setValue={setRestaurants}
            placeholder="Sehir Restoran Mutfak Ara"
            placeholderTextColor="black"
          />
          <CustomInput
            value={datepicker}
            setValue={setDatepicker}
            placeholder="Date"
            placeholderTextColor="black"
          />
          <View style={styles.starAndPrice}>
            <StarComponent title='Restorant yıldızı seç'/>
            <CustomInput
              value={price}
              setValue={price}
              placeholder="Price $"
              placeholderTextColor="black"
              type="PRICE"
            />
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
    marginTop: 10
  },  backgr: {
    flex: 1,
  },
});

export default HomeScreen;
