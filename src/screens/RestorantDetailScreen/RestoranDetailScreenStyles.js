import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  backgr: {
flex:1
  },
  container:{
flex:1
  },

  header: {
    fontSize:hp(4),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: wp(5),
    textShadowColor: 'black',
    textShadowOffset: {
      height: hp(0.1),
    },
    textShadowRadius: 5,
  },
  Menu:{
   flex:1,
  },
  reserve: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: hp(0.15),
    borderRadius: hp(5),
    alignSelf: 'center',
    width: wp(90),
    borderColor: 'black',
    backgroundColor: 'white',
    height: hp(7),
  },
  button_cancel: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 30,
    alignSelf: 'center',
    borderColor: '#1e88e5',
    backgroundColor: '#DD7272',
    width: wp(90),
    margin: 2,
    marginTop: 0,
    height: hp(7),
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
