import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Stars from "react-native-stars";
import { Ionicons } from "@expo/vector-icons";

const StarComponent = ({title}) => {
  return (
    <View>
    <Text style={styles.text}>{title}</Text>
      <Stars
        default={2.5}
        count={5}
        half={true}
        starSize={50}
        fullStar={
          <Ionicons name="star" size={20} style={[styles.myStarStyle]} />
        }
        emptyStar={
          <Ionicons
            name="star-outline"
            size={20}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
        halfStar={
          <Ionicons
            size={20}
            name="star-half-outline"
            style={[styles.myStarStyle]}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
    myStarStyle: {
        color: "yellow",
        backgroundColor: "transparent",
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: "white",
      },
    text: {
        marginBottom: 5,
        fontWeight:"bold"
    }
})

export default StarComponent;
