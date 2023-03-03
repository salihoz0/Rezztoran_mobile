import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Favorites from './Favorites';
import SearchEngine from './SearchEngine';
import data from '../../../assets/Data/Restorant_data.json';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import StarComponent from '../../components/StarComponent/StarComponent';

const ExploreScreen = () => {
  const [page, setPage] = useState(0);
  const navigation = useNavigation();
  const [text, setText] = useState("");

  const goBack = () => {
    setPage(0);
  };

  //Card tasarımına göre tekrardan düzenlenmeli
  const Discover = () => {
    return (
      <SafeAreaView edges={['bottom']} style={{ marginVertical: 10 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 5 }}>
          <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Keşfet</Text>
          <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => setPage(2)}>
              <Icon name="filter" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPage(1)}>
              <Icon name="heart" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          outlined
          style={{ marginHorizontal: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)' }}
          label='Restoran ara'
          value={text}
          onChangeText={text => setText(text)}
        />
        <View style={{ margin: 10 }}>
          <Text style={{ fontFamily: 'Poppins-Medium', marginHorizontal: 10, color: 'black', fontSize: 15, marginTop: 5 }}>Şehire Göre</Text>
          <FlatList
            horizontal
            scrollEventThrottle={5}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    marginHorizontal: 5,
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: 'rgb(217, 213, 169)',
                    borderRadius: 10,
                    backgroundColor: 'rgb(242, 238, 220)',
                  }}>
                  <FastImage
                    style={{ width: 170, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{
                      uri: `${item.imgURL}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#000000', fontFamily: 'Poppins-Medium', margin: 10, maxWidth: 160 }}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 5, marginBottom: 5 }}>
                    <Text style={{ color: '#000000', fontFamily: 'Poppins-light', marginLeft: 10 }}>{item.city}</Text>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('RestorantDetail', {
                        title: item.title,
                        star: item.star,
                        price: item.price,
                      });
                    }}>
                      <Icon name="search" size={15} style={{ color: 'rgb(237, 176, 7)', backgroundColor: '#FFFFFF', padding: 5, borderRadius: 20, borderColor: 'rgb(237, 176, 7)', borderWidth: 1 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
          <Text style={{ paddingTop: 10, paddingLeft: 10, fontFamily: 'Poppins-Medium', fontSize: 15, color: '#000000', paddingBottom: 10 }}>Önerilenler</Text>
          <FlatList
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={{ width: 170, height: 170, marginHorizontal: 10, borderColor: 'rgb(217, 213, 169)', borderWidth: 1, backgroundColor: 'rgb(242, 238, 220)', borderRadius: 10 }}>
                  <FastImage
                    style={{ width: 170, height: 100, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                    source={{
                      uri: `${item.imgURL}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text numberOfLines={1} ellipsizeMode="tail" variant="titleLarge" style={{ fontFamily: 'Poppins-Regular', color: '#000000', fontSize: 15, marginLeft: 10 }}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 10 }}>
                    <StarComponent count={item.star} select={'star'} />
                    <StarComponent count={item.price} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView >
    );
  };

  return (
    <View style={{ flex: 1 }}>
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
