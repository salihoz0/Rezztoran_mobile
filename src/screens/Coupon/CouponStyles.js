import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(35),
    borderWidth: wp(0.1),
    borderRadius: hp(5),
    margin: hp(1) * wp(0.5),
  },
  couponContainer: {
    height: hp(10),
    width: wp(90),
  },
  couponInnerContainer: {
    flexDirection:'row',
    width:wp(88),
    justifyContent:'center'
  },
  coupon: {
    height: hp(5),
    maxWidth: wp(80),
    fontSize: wp(3),
    color: 'black',
    textAlign: 'center',
    marginTop: hp(0.5),
    marginRight:wp(2)
  },
  couponCodeContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: wp(88),
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponCode: {
    fontSize: wp(3),
    color: 'black',
    alignSelf: 'center',marginRight:wp(2)
  },
  headerContainer: {
    height: hp(25),
    width: wp(90),
  },
  header: {
    fontSize: wp(5),
    color: 'black',
    alignSelf: 'center',
  },
  image: {
    width: wp(70),
    height: hp(21),
    alignSelf: 'center',
    resizeMode: 'stretch',
    borderRadius: wp(5),
  },
});
