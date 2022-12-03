import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

  image: {
    height: Dimensions.get('screen').height / 4.3,
    width: Dimensions.get('screen').width,
    resizeMode: 'stretch',
    borderRadius: 25,
  },
  text: {
    alignSelf:'flex-start',
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
    alignSelf:'flex-end',
    marginVertical: 5,
    paddingRight:20,
    borderRadius: 20,
  },
});
