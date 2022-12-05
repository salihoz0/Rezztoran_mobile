import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  backgr: {
    flex: 1,
  },

  header: {
    fontSize:32,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 5,
  },
  headerMenu: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 5,
  },
  Menu: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: 'white',
  },
  reserve: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.1,
    borderColor: 'black',
    backgroundColor: 'white',
    margin: 2,
    marginTop: 0,
    height: Dimensions.get('window').height / 15,
  },
  button_cancel: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 30,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.1,
    borderColor: '#1e88e5',
    backgroundColor: '#DD7272',
    margin: 2,
    marginTop: 0,
    height: Dimensions.get('window').height / 15,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  text_cancel: {
    fontSize: 20,
    color: 'white',
  },
  info:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  }
});
