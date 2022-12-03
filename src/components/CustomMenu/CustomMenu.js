import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Menu_data from '../../../assets/Data/Menu_data.json';
import styles from './CustomMenuStyles'
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



export default CustomMenu;
