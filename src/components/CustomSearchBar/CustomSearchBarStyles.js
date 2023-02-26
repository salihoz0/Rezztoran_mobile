import {StyleSheet, Dimensions} from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 40,
    borderColor: 'black',
    marginLeft: 15,
    paddingRight: 50
  },
  text_input: {
    fontSize: 20,
    width: Dimensions.get('screen').width / 1.5,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    letterSpacing: 5,
    lineHeight: 16,
  },
});