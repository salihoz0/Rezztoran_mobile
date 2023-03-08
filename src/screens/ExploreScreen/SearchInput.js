import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantCard from '../../components/RestaurantCard';
import { onlyCharacter } from '../../utils/onlyCharacter'

const SearchInput = (props) => {
    const { goBack, data } = props
    const [filter, setFilter] = useState('')

    const filterHandler = () => {
        return data.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
    }

    const renderItem = ({ item }) => {
        const { imgURL, title, city, price, star, most_rated } = item
        return (
            <RestaurantCard
                imgURL={imgURL}
                title={title}
                city={city}
                price={price}
                star={star}
                most_rated={most_rated}
            />
        )
    }

    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Restoran Ara</Text>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="backspace" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#E1E1E1',
                    marginBottom: 12,
                    alignItems: "center",
                }}
            />
            <TextInput
                style={{ marginHorizontal: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)', borderWidth: 1, borderColor: 'rgb(237, 176, 7)', borderRadius: 5 }}
                placeholder='Restoran ara'
                value={filter}
                onChangeText={text => setFilter(onlyCharacter(text))}
                autoFocus={true}
                placeholderTextColor={'#000000'}
            />
            <FlatList
                data={filterHandler()}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default SearchInput