import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Carousel = (props) => {
    const { data, handleFavoriteButtonPress, isIdInInitialState } = props
    const renderItem = ({ item }) => {
        const { imgURL, title, city, price, star, id } = item
        return (
            <View
                style={{
                    marginHorizontal: 5,
                    borderWidth: 1,
                    borderColor: 'rgb(217, 213, 169)',
                    borderRadius: 10,
                    backgroundColor: 'rgb(242, 238, 220)',
                }}>
                <TouchableOpacity style={{ position: 'absolute', right: 10, alignItems: 'center', marginTop: 10, zIndex: 2 }} onPress={() => { handleFavoriteButtonPress(id) }}>
                    {
                        isIdInInitialState(id) ? <Icon name="heart" size={20} style={{ color: 'rgb(237, 176, 7)', backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }} /> : <Icon name="heart-outline" size={20} style={{ color: 'rgb(237, 176, 7)', backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }} />
                    }
                </TouchableOpacity>
                <FastImage
                    style={{ width: 230, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{
                        uri: `${imgURL}`,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 15, fontFamily: 'Poppins-Medium', color: 'black', marginTop: 5, width: 130 }}>{title}</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>{city}</Text>
                </View>
                <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginVertical: 10 }}>
                    <Text style={{ backgroundColor: 'rgb(237, 176, 7)', width: 40, paddingLeft: 10, borderRadius: 10, color: 'black' }}>₺ {price}</Text>
                    <Text style={{ paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', color: '#000000' }}> <Icon name="star" size={15} color={'rgb(212, 123, 51)'} /> {star}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ margin: 10 }}>
            <FlatList
                horizontal
                removeClippedSubviews={false}
                scrollEventThrottle={5}
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Carousel