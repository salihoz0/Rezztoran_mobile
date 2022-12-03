import {StyleSheet, Dimensions} from 'react-native';
export default styles = StyleSheet.create({
    icon: {
      width: Dimensions.get('screen').width / 2,
      height:40,
      backgroundColor: 'white',
      marginLeft:13,
      borderRadius: 20,
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      marginTop:5,
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 3,
    },
    menu: {
      width: Dimensions.get('screen').width / 2,
      borderRadius: 20,
      marginTop: 40,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    menu_item: {
      borderBottomWidth: 0.5,
      borderColor: 'gray',
    },
    header: {
      fontSize: 25,
      paddingLeft: 25,
   
    },
    text:{
      alignSelf:'center'
    }
  });