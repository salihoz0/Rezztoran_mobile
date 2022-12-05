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
    <View style={styles.inner_container} >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Menu_data}
        renderItem={({item}) => (
          <View >
              <Text style={styles.header}>{item.name} </Text>
            <View >
              <Text style={styles.text}>Açıklama:{item.description} </Text>
              <Text style={styles.text}>Kategori: {item.category_name} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};



export default CustomMenu;
