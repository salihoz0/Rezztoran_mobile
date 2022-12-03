import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 20,
  },
  image: {
    height: Dimensions.get('screen').height / 6,
    width: Dimensions.get('screen').width / 3,
    resizeMode: 'stretch',
    borderRadius: 25,
  },
  Restorants: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 15,
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
    alignSelf: 'flex-end',
    marginVertical: 5,
    paddingRight: 20,
    borderRadius: 20,
  },
  info: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'flex-start',
    width: Dimensions.get('window').width / 1.9,
  },
  button_container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width / 1.9,
  },
  content: {
    borderRadius: 15,
  },
  blur_logo: {
    zIndex: 0,
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 1.7,
    alignSelf:'center'
  },
});
