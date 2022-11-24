import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

const Restorants = ({ Restorant }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: Restorant.imgURL }} />
        <Text style={styles.text}>{Restorant.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    height:Dimensions.get('window').height/4.5,
    width:Dimensions.get('window').width,
    resizeMode: "stretch",
    borderRadius: 7,
  },
  text: {
    position: "absolute",
    top: 140,
    fontSize: 20,
    color: "white",
    backgroundColor: "black",
  },
});

export default Restorants;
