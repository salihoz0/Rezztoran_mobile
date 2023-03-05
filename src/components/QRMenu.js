import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const QRMenu = (props) => {
    const { goBack } = props
    return (
        <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>QR Menu</Text>
                <TouchableOpacity onPress={goBack} >
                    <Icon name="home" size={30} style={{ color: 'rgb(212, 123, 51)' }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default QRMenu