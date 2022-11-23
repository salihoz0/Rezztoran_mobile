import react ,{useState} from 'react';
import {Modal,StyleSheet,Text,TouchableHighLiht,View,Plaform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; 

 

      
const CustomDatePicker=(props) =>{
    const getCurrentDate=()=>{
 
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      return date + '-' + month + '-' + year;}
    const{Textstyle}=props;
    const[date,setDate]=use
return(
    <TouchableHighLiht
    activeOpacity={0}
    
    onPress={()=> console.log('open') }> 

    <Text>{new Date().toLocaleString}</Text>
    
    </TouchableHighLiht>

);

};

CustomDatePicker.defaulProps={
  //
}
export default CustomDatePicker;