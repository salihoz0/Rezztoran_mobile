import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgr: {
    flex: 1,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.8,
    marginBottom: 15
  },
  title: {
    marginBottom: 16,
    marginTop: 100,
    marginLeft: 50,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 5,
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
    lineHeight: 60,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    borderRadius: 20,
    width: 200
  },
  text: {
    fontSize: 24,
    color: '#000000',
    textShadowColor: 'gray',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2,
    fontFamily: 'Poppins-Medium'
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
    fontFamily: 'Poppins-SemiBold',
  },
});
