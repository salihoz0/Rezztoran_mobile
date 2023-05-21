import {Avatar} from 'react-native-paper';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as Keychain from 'react-native-keychain';
import {resetAuth} from '../../store/authStore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRMenu from './QRMenu';
import ResetPassword from './ResetPassword';
import {useGetMe} from '../../api/auth';

const Profiles = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const {data: me} = useGetMe();

  const screenTabs = [
    {
      id: 1,
      pageName: 'QRMenu',
      onPress: () => setPage(1),
    },
    {
      id: 2,
      pageName: 'Şifremi Sıfırla',
      onPress: () => setPage(2),
    },
    {
      id: 3,
      pageName: 'Çıkış Yap',
      onPress: async () => {
        try {
          await Keychain.resetGenericPassword();
          dispatch(resetAuth({}));
        } catch (error) {
          console.log('Error resetting password: ', error);
        }
      },
    },
  ];

  const HomePage = () => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <Avatar.Text size={90} label="TG" />
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
              }}>
              {me?.content.name} {me?.content.surname}
            </Text>
            <Text
              style={{
                color: '#000000',
              }}>
              {me?.content.mail}
            </Text>
          </View>
        </View>
        {screenTabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={item.onPress}
              style={{
                borderWidth: 1,
                marginBottom: 10,
                marginHorizontal: 10,
                borderRadius: 10,
                borderColor: 'rgb(237, 176, 7)',
                flexDirection: 'row',
                paddingLeft: 20,
                paddingVertical: 20,
              }}>
              <Icon
                name="home"
                size={20}
                style={{color: 'rgb(237, 176, 7)', marginRight: 10}}
              />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                }}>
                {item.pageName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    );
  };

  return (
    <>
      {page === 0 && <HomePage />}
      {page === 1 && <QRMenu goBack={() => setPage(0)} />}
      {page === 2 && <ResetPassword goBack={() => setPage(0)} />}
    </>
  );
};

export default Profiles;
