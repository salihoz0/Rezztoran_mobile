import { Card, Avatar, Button, Divider, Chip } from 'react-native-paper';
import {ImageBackground, Text, Dimensions} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import React from 'react'
import { useGetMe } from '../../api/auth';
import {useDispatch, useSelector} from 'react-redux'
import * as Keychain from 'react-native-keychain'
import { resetAuth } from '../../store/authStore';

const Profiles = () => {
  const {myDetails} = useSelector((state) => state.authStore)
  const width = Dimensions.get('window').width / 1.2;
  // const {data:me} = useGetMe() //Çalışmamakta
  // console.log(me) 
  //<Avatar.Text size={90} label="TG"/> şimdilik bu şekilde kalsın
  // console.log(myDetails)

  const logout = async () => {
    await Keychain.resetGenericPassword()
    dispatch(resetAuth())
  }

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
      <Chip icon="lock-reset" style={{height:50, width:width, marginBottom: 10}} onPress={() => console.log('Şifreyi Değiştir')}>Şifreyi Değiştir</Chip>    
      <Chip icon="delete" style={{height:50, width:width, marginBottom: 10}} onPress={() => console.log('Hesabı Sil')}>Hesabı Sil</Chip>
      <Chip icon="exit-to-app" style={{height:50, width:width}} onPress={() => logout()}>Çıkış Yap</Chip>
      </Card.Content>
    </Card>
    </ImageBackground>
  )
}

export default Profiles