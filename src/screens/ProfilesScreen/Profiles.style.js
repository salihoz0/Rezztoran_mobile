import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: 'black',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  login: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 50,
    height: 200,
    borderRadius: 20,
    backgroundColor: '#DDD7D1',
    alignItems: 'center',
  },
  loginText: {
    textAlign: 'center',
    marginHorizontal: 60,
    marginVertical: 30,
    fontSize: 15,
    color: 'black',
  },
  button: {
    backgroundColor: '#000000',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  blur_logo: {
    zIndex: 0,
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 1.7,
    alignSelf:'center',
  },
});
