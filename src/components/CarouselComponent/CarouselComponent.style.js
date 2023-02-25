import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 10,
    fontFamily: 'Inter-Medium'
  },
  titleImage: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 20,
    paddingHorizontal: 2,
  },
  star: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
