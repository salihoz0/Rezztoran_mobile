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
    height:Dimensions.get('window').height/4,
    width:Dimensions.get('window').width,
    resizeMode: "stretch",
  },
  text: {
    position: "absolute",
    top:Dimensions.get('window').height/4.7,
    fontSize: 20,
    color: "white",
    backgroundColor: "black",
  },
});

export default Restorants;
