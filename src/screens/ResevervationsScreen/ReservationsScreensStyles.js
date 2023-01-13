import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 12,
    marginBottom: 12,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.07,
  },
  image: {
    height: Dimensions.get('screen').height / 9,
    width: Dimensions.get('screen').width / 2.7,
    resizeMode: 'stretch',
    borderRadius: 20,
    marginLeft: 15,
    marginVertical: 15,
    marginRight: 5,
  },
  // Restorants: {
  //   alignItems: 'center',
  //   backgroundColor: 'red',
  //   borderRadius: 20,
  //   margin: 15,
  // },
  info_container: {
    width: 200,
    paddingTop: 10,
  },
  titleImage: {
    fontSize: 15,
    color: 'black',
    // marginHorizontal: 20,
    // paddingHorizontal: 2,
  },
  // star: {
  //   alignItems: 'center',
  //   justifyContent: 'space-evenly',
  //   flexDirection: 'row',
  //   paddingTop: 10,
  // },

  // text: {
  //   alignSelf: 'flex-start',
  //   position: 'absolute',
  //   top: Dimensions.get('window').height / 75,
  //   fontSize: 20,
  //   color: 'black',
  //   backgroundColor: 'white',
  //   marginHorizontal: 10,
  //   paddingHorizontal: 10,
  //   borderRadius: 10,
  //   color: '#5BA366',
  // },
  // like: {
  //   position: 'absolute',
  //   alignSelf: 'flex-end',
  //   marginVertical: 5,
  //   paddingRight: 20,
  //   borderRadius: 20,
  // },
  // info: {
  //   fontSize: 15,
  //   color: 'black',
  //   alignSelf: 'flex-start',
  //   width: Dimensions.get('window').width / 1.9,
  // },
  button_container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width / 2,
  },
  content: {
    borderRadius: 10,
    width: Dimensions.get('window').width / 4,
  },
  contentCancel: {
    borderRadius: 10,
    width: Dimensions.get('window').width / 4,
    marginLeft:2

  },
  blur_logo: {
    zIndex: 0,
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 1.7,
    alignSelf: 'center',
  },
});
