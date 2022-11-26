import React from "react";
import { View, Image, StyleSheet, Dimensions, } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Restorants = ({ Restorant }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableWithoutFeedback onPress={()=>{navigation.navigate('RestorantDetail',{title:Restorant.title})}} pressRetentionOffset>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: Restorant.imgURL }} />
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    height:Dimensions.get('screen').height/4.3,
    width:Dimensions.get('screen').width,
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
