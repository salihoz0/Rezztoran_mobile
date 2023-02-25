import { Card, Avatar, Button } from 'react-native-paper';
import {ImageBackground, Text} from 'react-native';
import backgr from '../../../assets/images/arkaplan.png';
import {useNavigation} from '@react-navigation/native';
import React from 'react'
import { useGetMe } from '../../api/auth';
import {useDispatch, useSelector} from 'react-redux'
import * as Keychain from 'react-native-keychain'
import { resetAuth } from '../../store/authStore';

const Profiles = () => {
  const {myDetails} = useSelector((state) => state.authStore)
  // const {data:me} = useGetMe() //Çalışmamakta
  // console.log(me) 
  //<Avatar.Text size={90} label="TG"/> şimdilik bu şekilde kalsın
  console.log(myDetails)

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
      height: '13%',
      backgroundColor: '#FFFFFF',
      alignItems:'center',
    }}
    >
      <Card.Content style={{ alignItems: 'center', marginTop:10}}>
      <Button mode="contained" onPress={() => logout()}>
        Çıkış Yap
      </Button>      
      </Card.Content>
      </Card>
    </ImageBackground>
  )
}

export default Profiles