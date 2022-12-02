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
  list: {
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 7,
  },
  mostRated: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'white',
    width: 40,
    margin: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  imageView: {
    width: 330,
    height: 170,
  },
  image: {
    width: 330,
    height: 170,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  listTitleView: {
    alignItems: 'flex-start',
    width: 300,
  },
  listTitle: {
    fontSize: 17,
    color: 'black',
  },
  starAndPrice: {
    flexDirection: 'row',
    width: 300,
    paddingVertical: 2,
  },
  star: {
    marginRight: 15,
  },
});
