import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Menu_data from '../../../assets/Data/Menu_data.json';
import styles from './CustomMenuStyles';
import {Button} from 'react-native-paper';
import comment_data from '../../../assets/Data/Comment_data.json';
import StarComponent from '../StarComponent';
import  Icon  from 'react-native-vector-icons/Ionicons';
const CustomMenu = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={() => setSelected(1)}
          textColor="black"
          style={[styles.button, {borderBottomWidth: selected == 1 ? 1 : 0}]}>
          Menü
        </Button>
        <Button
          onPress={() => setSelected(2)}
          textColor="black"
          style={[styles.button, {borderBottomWidth: selected == 2 ? 1 : 0}]}>
          Yorumlar
        </Button>
      </View>

      {selected == 1 ? (
        <View style={styles.inner_container}>
          <Text style={styles.header}>Menü</Text>
          <FlatList
            
            showsVerticalScrollIndicator={false}
            data={Menu_data}
            renderItem={({item}) => (
              <View>
                <Text style={styles.header}>{item.name} </Text>
                <View>
                  <Text style={styles.text}>Açıklama:{item.description} </Text>
                  <Text style={styles.text}>
                    Kategori: {item.category_name}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={styles.inner_container}>
          <Text style={styles.header}>Yorumlar</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={comment_data}
            renderItem={({item}) => (
              <View style={styles.comment_container}>
                <View style={styles.comment_icon}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name='person-circle-sharp' size={30}  />
                <Text>{item.name} </Text>
                </View>
                <StarComponent count={item.star} select="star" />
                </View>
                <View style={styles.comment}>
                <Text >{item.comment}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CustomMenu;
