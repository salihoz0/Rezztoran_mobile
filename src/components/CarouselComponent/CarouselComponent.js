import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import Restorants from "../CustomRestorant/Restorants";
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from '@react-navigation/native';

const CarouselComponent = ({ data, icon, title, iconColor }) => {
  const width = Dimensions.get("window").width;
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.titleAndIcon}>
        <View style={styles.icon}>
          <Icon name={icon} size={18} color={iconColor} />
        </View>
        <Text style={styles.title}>{title}</Text>
        
      </View>
        <Carousel
          loop
          style={styles.carousel}
          width={width}
          mode='parallax'
          height={width /1.8}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={2000}
          renderItem={({ item }) => (
            <View style={{flex:1}}>
            <View style={styles.carouselImage}>
              <Restorants Restorant={item} />
            </View>
            <View >
            <Text style={styles.titleImage} >{item.title} </Text>
            </View>
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
  flex:1,   
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
    fontSize:18
  },
  titleImage:{
    fontSize: 18,
    alignSelf:'center',
    fontWeight:'bold',
    color:'black',
    
    
  },
  
});

export default CarouselComponent;
