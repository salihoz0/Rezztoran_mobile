import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  backgr: {
    flex: 1,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.8,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    margin: 30,
    marginTop: 100,
    marginLeft: 50,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 5,
    fontFamily: 'Inter-Thin'
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    borderRadius: 20,
    paddingRight: 15,
  },
  text: {
    // marginLeft: 10,
    // fontSize: 20,
    // fontWeight: 'bold',
    color: '#000000',
    // textShadowColor: 'gray',
    // textShadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    textShadowRadius: 2,
    fontFamily: 'Poppins-Thin'
  },
  offerText: {
    fontSize: 23,
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 2,
    paddingLeft: 5,
    textShadowColor: 'gray',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2,
    color: '#000000',
    fontFamily: 'Inter-Bold',
  },
  input: {
    marginTop: 20,
  },
  blur_logo: {
    zIndex: 0,
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 1.6,
    alignSelf: 'center',
  },
});
