import { Card, Avatar, Button, Divider, Chip } from 'react-native-paper';
import {ImageBackground, Text, Dimensions, View} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react'
import { useGetMe } from '../../api/auth';
import {useDispatch, useSelector} from 'react-redux'
import * as Keychain from 'react-native-keychain'
import { resetAuth } from '../../store/authStore';
import Modal from 'react-native-modal';
import CustomInput from '../../components/CustomInput';
import { usePostResetUserPassword } from '../../api/user';
import Toast from 'react-native-toast-message';


const Profiles = () => {
  const {myDetails} = useSelector((state) => state.authStore)
  const width = Dimensions.get('window').width / 1.2;
  const [modalVisible, setModalVisible] = useState(false);
  const { mutate: resPassword} = usePostResetUserPassword()
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  // const {data:me} = useGetMe() //Çalışmamakta
  // console.log(me) 
  //<Avatar.Text size={90} label="TG"/> şimdilik bu şekilde kalsın
  // console.log(myDetails)

  const logout = async () => {
    await Keychain.resetGenericPassword()
    dispatch(resetAuth())
  }

  const showToast = () => {
    Toast.show({
      type: 'Başarılı',
      text1: 'Şifre Sıfırlama',
      text2: 'Şifreniz Başarıyla Sıfırlanmıştır'
    });
  }


  const doResPassword = async (values={mail, password}) => {
    new Promise((resolve, reject) => {
      resPassword(values,{
        onSuccess: data => {
          resolve(undefined)
          Keychain.resetGenericPassword()
          setMail('')
          setPassword('')
          console.log('başarılı')
          setModalVisible(false)
          showToast()
        },
        onError: () => {
          reject
          console.log('istek başarısız')
        }
      })
    },)
  };

const ResetPasswordModal = ({modalVisible}) => {
  return (
    <Modal
    isVisible={modalVisible}
    backdropColor={'white'}
    backdropOpacity={1}
    animationInTiming={2}
    animationIn="slideInDown"
    animationOut="slideOutDown">
    <View style={{flex: 1}}>
      <Text style={{
            marginBottom: 16,
            marginTop: 100,
            fontSize: 40,
            fontFamily: 'Poppins-Medium',
            lineHeight: 60,
            color: '#000000',
            textAlign:'center'
      }}>Reset Password</Text>
      <CustomInput
            placeholder="Mail"
            value={mail}
            setValue={val => setMail(val)}
          />
          <CustomInput
            placeholder="Şifre"
            value={password}
            setValue={val => setPassword(val)}
            secureTextEntry
            style={{width: 500}}
          />
        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center'}}>
      <Chip icon="exit-to-app" style={{height:50, width:width, marginBottom: 10, width: '35%'}} onPress={() => () => setModalVisible(false)}>İptal</Chip>
      <Chip icon="lock-reset" style={{height:50, width:width, marginBottom: 10, width: '35%'}} onPress={() => doResPassword({mail: mail, password: password})}>Hesabı Sil</Chip>
      </View>
    </View>
  </Modal>
  );
};

  return (
    <ImageBackground style={{flex:1}} source={backgr}>
    <Card 
    style={{
      marginTop: 40,
      marginHorizontal: 20,
      height: '30%',
      backgroundColor: '#FFFFFF',
      alignItems:'center',
    }}
    >
      <Card.Content style={{ alignItems: 'center', marginBottom:10}}>
      <Avatar.Text size={90} label="TG"/>
      </Card.Content>
      <Card.Content style={{flexDirection:'row', alignItems: 'center', width: '60%', justifyContent:'space-evenly'}}>
        <Text style={{fontSize: 20, fontFamily: 'Inter-Medium', color:'#000000'}}>{myDetails.name}</Text>
        <Text style={{fontSize: 20, fontFamily: 'Inter-Medium', color:'#000000'}}>{myDetails.surname}</Text>
      </Card.Content>
      <Card.Content style={{ alignItems: 'center', marginTop:10}}>
      <Text style={{fontSize: 15, fontFamily: 'Inter-Regular', color:'#000000'}}>{myDetails.mail}</Text>
      </Card.Content>
    </Card>
    <Card 
    style={{
      marginTop: 5,
      marginHorizontal: 20,
      height: '40%',
      backgroundColor: '#FFFFFF',
      alignItems:'center',
    }}
    >
      <Card.Content style={{ alignItems: 'center', marginTop:10, gap:50}}>
      <Chip icon="lock-reset" style={{height:50, width:width, marginBottom: 10}} onPress={() => setModalVisible(true)}>Şifreyi Değiştir</Chip>    
      <Chip icon="delete" style={{height:50, width:width, marginBottom: 10}} onPress={() => console.log('Hesabı Sil')}>Hesabı Sil</Chip>
      <Chip icon="exit-to-app" style={{height:50, width:width}} onPress={() => logout()}>Çıkış Yap</Chip>
      </Card.Content>
    </Card>
    <ResetPasswordModal modalVisible={modalVisible}/>
    </ImageBackground>
  )
}

export default Profiles