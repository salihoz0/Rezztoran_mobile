import React, {useState} from 'react';
import {Dimensions, View, Text, Button, ImageBackground} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Favorites from './Favorites';
import SearchEngine from './SearchEngine';
import data from '../../../assets/Data/Restorant_data.json';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/CustomButton/CustomButton';
import SearchBar from '../../components/CustomSearchBar/CustomSearchBar';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';

const ExploreScreen = () => {
  const [page, setPage] = useState(0);
  const navigation = useNavigation();

  const goBack = () => {
    setPage(0);
  };

  const Discover = () => {
    return (
      <View style={{marginVertical: 10}}>
        <View style={{flexDirection: 'row',  justifyContent: 'space-evenly', width:'100%', marginVertical:5}}>
          <Text style={{fontSize:30, fontFamily:'Poppins-Medium', color: 'black'}}>Keşfet</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Button
            title="Favoriler"
            onPress={() => setPage(1)}
          />
          <Button
            title="Ara"
            onPress={() => setPage(2)}
          />
          </View>
        </View>
        <SearchBar />
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: 5,
                  borderWidth: 1,
                  borderColor: 'gray',
                }}>
                <FastImage
                  style={{width: 210, height: 200}}
                  source={{
                    uri: `${item.imgURL}`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <Text>{item.title}</Text>
                <View>
                  <Text>{item.city}</Text>
                </View>
                <View>
                  <CustomButton
                    text="Detay"
                    onPress={() => {
                      navigation.navigate('RestorantDetail', {
                        title: item.title,
                        star: item.star,
                        price: item.price,
                      });
                    }}
                    bgColor={'white'}
                    fgColor={'red'}
                  />
                </View>
              </View>
            );
          }}
        />
        <CarouselComponent data={data}/>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {page === 0 && <Discover />}
      {page === 1 && <Favorites goBack={goBack} />}
      {page === 2 && <SearchEngine goBack={goBack} />}
    </View>
  );
};

export default ExploreScreen;

/*
  const navigation = useNavigation();
  const [liked, setLiked] = useState(data.liked);

  const renderItem = ({item}) => {
    return (
      <View style={styles.flatlist}>
        <Pressable
          onPress={() => {
            navigation.navigate('RestorantDetail', {
              title: item.title,
              star: item.star,
              price: item.price,
            });
          }}
          pressRetentionOffset>
          <Image style={styles.image} source={{uri: item.imgURL}} />
          <Text style={styles.likednumber}>{item.star}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <View style={styles.starAndPrice}>
            <StarComponent count={item.star} select={'star'} />
            <StarComponent count={item.price} />
          </View>
          <Pressable
            onPress={() => (
              setLiked(isLiked => !isLiked), (item.liked = !item.liked)
            )}
            style={styles.like}
            pressRetentionOffset>
            <Icon
              name={'heart'}
              size={25}
              color={item.liked ? 'red' : 'white'}
              style={styles.like}
            />
          </Pressable>
        </Pressable>
      </View>
    );
  };

  return (
    <ImageBackground source={backgr} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>Keşfedin</Text>
        <SearchBar />
        <View style={{flexDirection: 'row'}}>
          <View>
            <Menu data={data} />
          </View>
          <FilterMenu data={data} />
        </View>
        <FlatList
          data={data}
          style={{zIndex: 1}}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      <Image
        source={BlurLogo}
        resizeMode={'contain'}
        style={styles.blur_logo}
      />
    </ImageBackground>
*/
