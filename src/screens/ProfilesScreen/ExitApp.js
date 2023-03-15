import React, { useState } from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { resetAuth } from '../../store/authStore';
import * as Keychain from 'react-native-keychain';

const ExitApp = (props) => {
    const { goBack } = props
    const dispatch = useDispatch();
    const { myDetails } = useSelector(state => state.authStore);

    return (
        <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Header title='Çıkış Yap' firstIconName='home' onPress1={goBack} />
            <Text>ExitApp</Text>
        </SafeAreaView>
    )
}

export default ExitApp