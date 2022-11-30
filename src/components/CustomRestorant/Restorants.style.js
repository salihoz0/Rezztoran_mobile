import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('screen').height / 4.3,
    width: Dimensions.get('screen').width,
    resizeMode: 'stretch',
    borderRadius: 25,
  },
  text: {
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
    backgroundColor: 'white',
    position: 'absolute',
    marginHorizontal: 175,
    marginVertical: 5,
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
