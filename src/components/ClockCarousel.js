import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ClockCarousel = () => {
    const [selectedHour, setSelectedHour] = useState(null);

    const hours = [
        { id: 1, label: '00:00' },
        { id: 2, label: '13:00' },
        { id: 3, label: '14:00' },
        { id: 4, label: '15:00' },
        { id: 5, label: '16:00' },
        { id: 6, label: '17:00' },
        { id: 7, label: '18:00' },
        { id: 8, label: '19:00' },
        { id: 9, label: '20:00' },
        { id: 10, label: '21:00' },
        { id: 11, label: '22:00' },
        { id: 12, label: '23:00' },
    ];

    const HourItem = ({ hour }) => {
        const isSelected = selectedHour && selectedHour.id === hour.id;
        return (
            <TouchableOpacity
                onPress={() => setSelectedHour(hour)}
                style={[styles.hourItem, isSelected && styles.selectedHourItem]}
            >
                <Text style={[styles.hourText, isSelected && styles.selectedHourText]}>{hour.label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginTop: 10, backgroundColor: 'rgb(240, 238, 230)', borderColor: 'rgb(237, 176, 7)', borderWidth: 1, marginHorizontal: 10, alignItems: 'center', paddingVertical: 10, borderRadius: 10 }}>
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
        borderWidth: 2,
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
        borderWidth: 2,
        borderColor: '#0cc45c'
    },
    selectedHourText: {
        fontSize: 15,
        fontFamily: 'Inter-Bold',
        color: '#FFFFFF'
    }
})