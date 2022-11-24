import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import Restorants from "../CustomRestorant/Restorants";
import { Ionicons } from "@expo/vector-icons";

const CarouselComponent = ({ data, icon, title, iconColor }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.titleAndIcon}>
        <View style={styles.icon}>
          <Ionicons name={icon} size={18} color={iconColor} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
        <Carousel
          loop
          style={styles.carousel}
          width={width}
          height={width / 2}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View style={styles.carouselImage}>
              <Restorants Restorant={item} />
            </View>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  carouselImage: {
    flex: 1,
    justifyContent: "center",
  },
  titleAndIcon: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "center",
    height: 20,
  },
  icon:{
    marginRight: 7,
  },
  title:{
    fontSize: 18
  }
});

export default CarouselComponent;
