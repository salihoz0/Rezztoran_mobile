import {StyleSheet, Dimensions} from 'react-native';
export default styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 5,
      margin: 5,
      alignSelf: 'center',
      borderRadius: 40,
      borderColor: 'black',
      width: Dimensions.get('window').width / 1.2,
      height: Dimensions.get('window').height / 17,
    },
    inner_container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height:40
    },
  
    text_input: {
      fontSize: 20,
      width: Dimensions.get('screen').width / 1.5,
      alignSelf:'center',
      height:48
    },
  });