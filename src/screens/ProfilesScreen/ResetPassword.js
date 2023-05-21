import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header';
import {
  usePostResetUserPassword,
  usePostResetPasswordCode,
} from '../../api/auth';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Toast from 'react-native-toast-message';
import * as Keychain from 'react-native-keychain';

const ResetPassword = props => {
  const {goBack} = props;
  const [mail, setMail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const {mutate: resetPassword} = usePostResetUserPassword();
  const {mutate: sendCodeAndNewPassword} = usePostResetPasswordCode();
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const doResPassword = async mail => {
    new Promise((resolve, reject) => {
      resetPassword(mail, {
        onSuccess: () => {
          resolve(undefined);
          console.log('başarılı');
          toggleModal();
          Toast.show({
            type: 'success',
            text1: 'Kod Gönderildi',
            text2: 'Lütfen Kodunuzu giriniz',
          });
        },
        onError: () => {
          reject;
          console.log('istek başarısız');
          Toast.show({
            type: 'error',
            text1: 'Başarısız',
            text2: 'Hatalı mail girdiniz',
          });
        },
      });
    });
  };

  const doSendNewCodeAndPassword = async (values = {mail, password, code}) => {
    new Promise((resolve, reject) => {
      sendCodeAndNewPassword(values, {
        onSuccess: () => {
          resolve(undefined);
          console.log('başarılı');
          toggleModal();
          Toast.show({
            type: 'success',
            text1: 'Şifre Değişikliği',
            text2: 'Şifreniz Başarıyla Değiştirildi',
          });
          Keychain.resetGenericPassword();
        },
        onError: () => {
          reject;
          console.log('istek başarısız');
          Toast.show({
            type: 'error',
            text1: 'Başarısız',
            text2: 'Yanlış Kod Girdiniz',
          });
        },
      });
    });
  };
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header title="Şifre Sıfırla" firstIconName="home" onPress1={goBack} />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}>
          mailinizi giriniz
        </Text>
        <CustomInput placeholder="e-posta" value={mail} setValue={setMail} />
        <CustomButton text="mail gönder" onPress={() => doResPassword(mail)} />
      </View>
      {!isModalVisible && (
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Text>Kodu Gir</Text>
          <CustomInput
            placeholder="6 Haneli Kod"
            value={code}
            setValue={setCode}
          />
          <Text>Yeni Şifre Gir</Text>
          <CustomInput
            placeholder="Yeni Şifre"
            value={password}
            setValue={setPassword}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <CustomButton
              text="Kodu Gönder"
              onPress={() =>
                doSendNewCodeAndPassword({
                  mail: mail,
                  password: password,
                  code: code,
                })
              }
              type="SMALL"
              bgColor="#FFFFFF"
              fgColor="rgb(237, 176, 7)"
            />
            <CustomButton
              text="İptal"
              type="SMALL"
              onPress={() => toggleModal()}
              bgColor="#FFFFFF"
              fgColor="#DD4D44"
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ResetPassword;
