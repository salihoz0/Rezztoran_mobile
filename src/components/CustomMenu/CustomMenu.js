import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Menu_data from '../../../assets/Data/Menu_data.json';
const CustomMenu = () => {
  const navigation = useNavigation();
  return (
    <View >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Menu_data}
        renderItem={({item}) => (
          <View style={styles.inner_container}>
            <View style={styles.title}>
              <Text style={styles.header}>{item.name} </Text>
            </View>
            <View >
              <Text style={styles.text}>Description: {item.description} </Text>
              <Text style={styles.text}>Category:{item.category_name} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inner_container: {
    alignItems: 'flex-start',
    borderWidth: 0.5,
    borderRadius:10,
    padding:5,
    marginLeft:1,
    marginRight:1,
    marginBottom:3,
    marginTop:3,
    backgroundColor:'#e0e0e0'

  },
  title: {
    borderBottomWidth: 0.8,
  },
  header:{
    fontSize:18,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'black'
  },
  text: {
    color:'black',
    fontStyle:'italic'
  },
});

export default CustomMenu;
