import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';

const DateSelection = (props) => {
    const { handleReservationDate, reservationDate } = props
    LocaleConfig.locales['tr'] = {
        monthNames: [
            'Ocak',
            'Şubat',
            'Mart',
            'Nisan',
            'Mayıs',
            'Haziran',
            'Temmuz',
            'Ağustos',
            'Eylül',
            'Ekim',
            'Kasım',
            'Aralık',
        ],
        dayNames: [
            'Pazar',
            'Pazartesi',
            'Salı',
            'Çarşamba',
            'Perşembe',
            'Cuma',
            'Cumartesi',
        ],
        dayNamesShort: ['PAZ', 'PTE', 'SAL', 'ÇAR', 'PER', 'CUM', 'CTE'],
        today: 'Bugün',
    };
    LocaleConfig.defaultLocale = 'tr';

    return (
        <View
            style={{
                alignItems: 'center'
            }}
        >
            <Calendar
                style={{
                    height: 340,
                    width: 340,
                }}
                onDayPress={day => {
                    handleReservationDate(day)
                }}
                markedDates={reservationDate ? { [reservationDate.dateString]: { selected: true } } : {}}
                theme={{
                    textDisabledColor: '#959393',
                    selectedDotColor: 'transparent',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#000000',
                    selectedDayBackgroundColor: 'rgb(237, 176, 7)',
                    selectedDayTextColor: '#ffffff',
                    dayTextColor: '#000000',
                    dotColor: 'transparent',
                    textDayFontSize: 14,
                    textDayFontFamily: 'Poppins-Medium',
                    textMonthFontSize: 20,
                    textMonthFontFamily: 'Poppins-Medium',
                    textDayHeaderFontSize: 14,
                    textDayHeaderFontFamily: 'Poppins-Medium',
                    arrowColor: '#000000'
                }}
            />
        </View>
    )

}

export default DateSelection