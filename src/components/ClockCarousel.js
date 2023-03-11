import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ClockCarousel = (props) => {
    const { hours, selectedHour, setSelectedHour } = props

    const setSelectedHourHandler = (reserv, hour) => {
        reserv === false && setSelectedHour(hour)
    }

    const HourItem = ({ hour }) => {
        const isSelected = selectedHour && selectedHour.id === hour.id;
        return (
            <TouchableOpacity
                onPress={() => setSelectedHourHandler(hour.reserv, hour)}
                style={[styles.hourItem, isSelected && styles.selectedHourItem, hour.reserv === true && styles.disabledHour]}
                disabled={hour.reserv}
            >
                <Text style={[styles.hourText, isSelected && styles.selectedHourText, , hour.reserv === true && styles.disabledHourText]}>{hour.label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginTop: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(217, 213, 169)', borderWidth: 1, marginHorizontal: 10, alignItems: 'center', paddingVertical: 10, borderRadius: 5 }}>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000000' }}>2 Kişi, 06 Mart Pazartesi</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: 'rgb(212, 123, 51)' }}>Uygun olan rezervasyon saatleri</Text>
            </View>
            <FlatList
                horizontal
                contentContainerStyle={{ flexDirection: 'row' }}
                data={hours}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <HourItem hour={item} />}
            />
        </View>
    )
}

export default ClockCarousel

const styles = StyleSheet.create({
    hourItem: {
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(240, 238, 230)',
        marginHorizontal: 10,
    },
    hourText: {
        fontSize: 15,
        fontFamily: 'Inter-Medium',
        color: '#000000'
    },
    selectedHourItem: {
        backgroundColor: '#80d79b',
        borderWidth: 1,
        borderColor: '#0cc45c'
    },
    selectedHourText: {
        fontSize: 15,
        fontFamily: 'Inter-Bold',
        color: '#FFFFFF'
    },
    disabledHour: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#D3D3D3'
    },
    disabledHourText: {
        color: 'gray',
        fontFamily: 'Inter-Medium'
    }
})