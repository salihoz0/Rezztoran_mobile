import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('screen').height / 4.3,
    width: Dimensions.get('screen').width,
    resizeMode: 'stretch',
  },
  text: {
    position: 'absolute',
    top: Dimensions.get('window').height / 4.7,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
  },
});
