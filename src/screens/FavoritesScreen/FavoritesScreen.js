import React, {useState} from 'react';
import {View, Text, FlatList, Image, ImageBackground} from 'react-native';
import Favorites from '../../../assets/Data/Favorites.json';
import StarComponent from '../../components/StarComponent/StarComponent';
import styles from './FavoritesScreen.style';
import backgr from '../../../assets/images/arkaplan.png';

const FavoritesScreen = () => {
  const [favorite, setFavorite] = useState(Favorites);

  renderItem = ({item}) => {
    return (
      <View style={styles.list}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{uri: item.imgURL, width: 100, height: 100}}
          />
          <View style={styles.mostRated}>
            <Text style={{color: 'green', fontSize: 15}}>
              {item.most_rated}
            </Text>
          </View>
        </View>
        <View style={styles.listTitleView}>
          <Text style={styles.listTitle}>{item.title}</Text>
        </View>
        <View style={styles.starAndPrice}>
          <View style={styles.star}>
            <StarComponent
              count={item.star}
              select={'star'}
              style={styles.star}
            />
          </View>
          <View>
            <StarComponent count={item.price} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={backgr}>
        <Text style={styles.title}>FavoritesScreen</Text>
        <FlatList
          keyExtractor={item => item.id}
          renderItem={renderItem}
          data={favorite}
        />
      </ImageBackground>
    </View>
  );
};

export default FavoritesScreen;
