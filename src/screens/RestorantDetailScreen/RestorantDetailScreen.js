import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import Restorant_data from '../../../assets/Data/Restorant_data.json';
import Restorants from '../../components/CustomRestorant/Restorants';
import CustomMenu from '../../components/CustomMenu/CustomMenu';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';
import {useNavigation} from '@react-navigation/native';

const RestorantDetailScreen = props => {
  const selectTitle = props.route.params.title;
  const [list, setList] = useState(Restorant_data);
  const renderRestorant = ({item}) => <Restorants Restorant={item} />;
  const [showMenu, setShowMenu] = useState(true);

  const pressed = () => {
    const filteredList = Restorant_data.filter(Restorant => {
      const currentTitle = Restorant.title;
      return currentTitle.indexOf(selectTitle) > -1;
    });
    setList(filteredList);
  };
  useEffect(() => {
    pressed();
  }, []);

  return (
    <ImageBackground source={backgr} style={styles.backgr}>
      <View style={{flex: 1}}>
        <View style={styles.header_view}>
          <Text style={styles.header}>{selectTitle}</Text>
        </View>
        <View style={styles.FlatList}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={list}
            renderItem={renderRestorant}
          />
        </View>
        {showMenu ? (
          <View style={styles.Menu}>
            <Text style={styles.header}>Menü</Text>
            <CustomMenu />
          </View>
        ) 
        : (
          <View style={styles.reserve}>
            <DateTimePicker />
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowMenu(!showMenu);
        }}
        style={styles.button} 
        activeOpacity={0.9}
        >
          {
          showMenu ? (<Text style={styles.text}>REZERVASYON YAP</Text>)
          :(<Text style={styles.text}>İPTAL ET</Text>)
        }
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgr: {
    flex: 1,
  },

  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  header_view: {
    backgroundColor: '#e0e0e0',
    opacity: 0.8,
    maxHeight: 100,
  },
  Menu: {
    height: Dimensions.get('window').height / 1.53,
  },
  reserve:{
    flex:1

  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0.5,
    borderRadius: 30,
    width: Dimensions.get('window').width,
    borderColor:'#1e88e5',
    backgroundColor: '#e0e0e0',
    margin: 2,
    marginTop: 0,
    height: Dimensions.get('window').height / 15,
  },
  text: {
    fontSize: 20,
    color:'black'
  },
});

export default RestorantDetailScreen;
