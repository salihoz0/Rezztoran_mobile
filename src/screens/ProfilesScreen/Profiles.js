import { Card, Avatar, Button, Divider, Chip } from 'react-native-paper';
import {
  ImageBackground,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Keychain from 'react-native-keychain';
import { resetAuth } from '../../store/authStore';
import Modal from 'react-native-modal';
import CustomInput from '../../components/CustomInput';
import { usePostResetUserPassword } from '../../api/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRMenu from './QRMenu';
import ResetPassword from './ResetPassword';
import ExitApp from './ExitApp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useGetMe } from '../../api/auth';

const Profiles = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { data: me } = useGetMe()
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
    }
  ]

  const HomePage = () => {
    return (
      <SafeAreaView>
        <View>
          <View>
            <Avatar.Text size={90} label="TG" />
            <View>
              <Text>
                {me?.content.name} {me?.content.surname}
              </Text>
              <Text>
                {me?.content.mail}
              </Text>
            </View>
          </View>
        </View>
        {
          screenTabs.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={item.onPress} >
                <Icon name='home' size={20} style={{ color: 'rgb(237, 176, 7)' }} />
                <Text>{item.pageName}</Text>
              </TouchableOpacity>
            )
          })
        }
      </SafeAreaView>
    )
  }

  return (
    <>
      {page === 0 && <HomePage />}
      {page === 1 && <QRMenu goBack={() => setPage(0)} />}
      {page === 2 && <ResetPassword goBack={() => setPage(0)} />}
      {/* {page === 3 && <ExitApp goBack={() => setPage(0)} />} */}
    </>
  );
};

export default Profiles;

/*
const { myDetails } = useSelector(state => state.authStore);
  const width = Dimensions.get('window').width / 1.2;
  const [modalVisible, setModalVisible] = useState(false);
  const { mutate: resPassword } = usePostResetUserPassword();
  const [mail, setMail] = useState('');
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const logout = async () => {
    await Keychain.resetGenericPassword();
    dispatch(resetAuth());
  };

  const doResPassword = async (mail) => {
    new Promise((resolve, reject) => {
      resPassword(values, {
        onSuccess: data => {
          resolve(undefined);
          Keychain.resetGenericPassword();
          setMail('');
          console.log('başarılı');
          setModalVisible(false);
        },
        onError: () => {
          reject;
          console.log('istek başarısız');
        },
      });
    });
  };

  const ResetPasswordModal = ({ modalVisible }) => {
    return (
      <Modal
        isVisible={modalVisible}
        backdropColor={'white'}
        backdropOpacity={1}
        animationInTiming={2}
        animationIn="slideInDown"
        animationOut="slideOutDown">
        <View style={{ flex: 1 }}>
          <Text
            style={{
              marginBottom: 16,
              marginTop: 100,
              fontSize: 40,
              fontFamily: 'Poppins-Medium',
              lineHeight: 60,
              color: '#000000',
              textAlign: 'center',
            }}>
            Şifre Sıfırlama
          </Text>
          <CustomInput
            placeholder="Şifre"
            value={mail}
            setValue={val => setMail(val)}
            secureTextEntry
            style={{ width: 500 }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Chip
              icon="exit-to-app"
              style={{ height: 50, width: width, marginBottom: 10, width: '35%' }}
              onPress={() => {
                setModalVisible(false);
              }}>
              İptal
            </Chip>
            <Chip
              icon="lock-reset"
              style={{ height: 50, width: width, marginBottom: 10, width: '35%' }}
              onPress={() => doResPassword({ mail: mail, password: password })}>
              Kodu Gönder
            </Chip>
          </View>
        </View>
      </Modal>
    );
  };

  const HomePage = () => {
    return (
      <ImageBackground style={{ flex: 1 }} source={backgr}>
        <View
          style={{
            marginTop: 40,
            marginHorizontal: 20,
            height: '30%',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
          }}>
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Avatar.Text size={90} label="TG" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '60%',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Inter-Medium',
                color: '#000000',
              }}>
              {myDetails.name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Inter-Medium',
                color: '#000000',
              }}>
              {myDetails.surname}
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Inter-Regular',
                color: '#000000',
              }}>
              {myDetails.mail}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            marginHorizontal: 20,
            height: '40%',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
          }}>
          <View style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
            <TouchableOpacity
              onPress={() => setPage(1)}
              style={{
                alignItems: 'center',
                borderColor: 'rgb(237, 176, 7)',
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderRadius: 5,
                backgroundColor: 'rgb(240, 238, 230)',
                marginBottom: 5,
              }}>
              <Icon
                name="qrcode-scan"
                size={20}
                style={{ color: 'rgb(212, 123, 51)' }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                  color: 'rgb(212, 123, 51)',
                }}>
                QR KOD
              </Text>
            </TouchableOpacity>
            <Chip
              icon="lock-reset"
              style={{ height: 50, width: width, marginBottom: 5, backgroundColor: '#FFFFFF' }}
              onPress={() => setModalVisible(true)}>
              Şifreyi Değiştir
            </Chip>
            <Chip
              icon="delete"
              style={{ height: 50, width: width, marginBottom: 5, backgroundColor: '#FFFFFF' }}
              onPress={() => console.log('Hesabı Sil')}>
              Hesabı Sil
            </Chip>
            <Chip
              icon="exit-to-app"
              style={{ height: 50, width: width, backgroundColor: '#FFFFFF' }}
              onPress={() => logout()}>
              Çıkış Yap
            </Chip>
          </View>
        </View>
        <ResetPasswordModal modalVisible={modalVisible} />
      </ImageBackground>
    );
  };

  return (
    <>
      {page === 0 && <HomePage />}
      {page === 1 && <QRMenu goBack={() => setPage(0)} />}
    </>
  );

*/
