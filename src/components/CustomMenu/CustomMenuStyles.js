import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderRadius: 0,
    marginLeft: wp(2),
    marginRight: wp(2),
flex:1
  },
  inner_container:{
    flex:1
  },
  header: {
    fontSize: hp(3),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
    fontFamily: 'Poppins-Thin',
    marginTop: hp(1),
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontStyle: 'italic',
  },
  button: {
    width: wp(48),
    borderColor: 'purple',
  },
  comment_container: {
    borderColor: 'black',
    borderBottomWidth: hp(0.1),
    margin: wp(1),
    padding: wp(1),
    flexDirection: 'row',
    justifyContent:'space-between'

  },
  comment:{
    alignItems:'flex-start',
    width: wp('67%'),
    padding:hp(1),
    marginLeft:wp(1),
    backgroundColor:'white',
    borderRadius:20
  },
  comment_icon:{
    justifyContent:'center'
  }
});
