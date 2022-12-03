import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
    ImageBackground: {
  flex:1
    },
    image: {
      height: Dimensions.get('screen').height / 4.3,
      width: Dimensions.get('screen').width / 1.2,
      resizeMode: 'stretch',
      borderRadius: 25,
    },
    Restorants: {
      alignItems: 'center',
      backgroundColor:'white',
      borderRadius:20,
      margin:15
    },
    titleImage: {
      fontSize: 20,
      color: 'black',
      marginHorizontal: 20,
      paddingHorizontal: 2,
    },
    star: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      paddingTop: 10,
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'black',
      marginTop: 20,
    },
    text: {
      alignSelf: 'flex-start',
      position: 'absolute',
      top: Dimensions.get('window').height / 75,
      fontSize: 20,
      color: 'black',
      backgroundColor: 'white',
      marginHorizontal: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      color: '#5BA366',
    },
    like: {
      position: 'absolute',
      alignSelf:'flex-end',
      marginVertical: 5,
      paddingRight:20,
      borderRadius: 20,
    },
    info:{
      fontSize:15,
      color:'black',
      alignSelf:'center'
    }
  });