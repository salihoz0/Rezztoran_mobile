import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
    backgr: {
      flex: 1,
    },
  
    header: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
    },
    header_view: {
      backgroundColor: '#e0e0e0',
      opacity: 0.8,
      maxHeight: 100,
    },
    Menu: {
      height: Dimensions.get('window').height / 1.53,
    },
    reserve: {
      flex: 1,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderRadius: 30,
      width: Dimensions.get('window').width,
      borderColor: '#1e88e5',
      backgroundColor: '#e0e0e0',
      margin: 2,
      marginTop: 0,
      height: Dimensions.get('window').height / 15,
    },
    text: {
      fontSize: 20,
      color: 'black',
    },
  });