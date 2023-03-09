import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Reservation = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Keşfet</Text>
                <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => setPage(1)}>
                        <Icon name="filter" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Reservation