import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Restorant_data from "../../../assets/Data/Restorant_data.json";
import Restorants from "./Restorants";

const CustomRestorant = ({ text, icon }) => {
  const renderRestorant = ({ item }) => <Restorants Restorant={item} />;

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ resizeMode: "contain" }} source={icon} />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{text}</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Restorant_data}
          renderItem={renderRestorant}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 4,
  },
  image: {},
});
export default CustomRestorant;
