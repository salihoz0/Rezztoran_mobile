import {StyleSheet, Dimensions} from 'react-native';
export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    starAndPrice: {
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carousel: {
      marginTop: 10,
      flex: 1,
      height: Dimensions.get('window').height / 1.8,
    },
    backgr: {
      flex: 1,
    },
    number: {
      marginTop: 10,
    },
    textinput: {
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 8,
      alignSelf: 'center',
      fontStyle: 'italic',
    },
    button: {
      alignSelf: 'flex-end',
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
  