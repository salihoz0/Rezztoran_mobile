import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 2,
    zIndex: 1,
  },

  image: {
    borderRadius: 30,
    resizeMode: 'stretch',
    width: Dimensions.get('window').width / 2.3,
    height: Dimensions.get('window').height / 5,
  },
  title: {
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 20,
  },
  icon: {
    width: Dimensions.get('screen').width / 2.3,
    height: 40,
    borderRadius: 20,
    marginTop: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  menu: {
    width: Dimensions.get('screen').width / 2,
    borderRadius: 20,
    marginTop: 40,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  menu_item: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  header: {
    fontSize: 40,
    marginTop: 74,
    marginLeft: 46,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    shadowOpacity: 0.29,
  },
  flatlist: {
    borderRadius: 30,
    width: Dimensions.get('window').width / 2.2,
    height: Dimensions.get('window').height / 4,
    marginTop: 20,
  },
  inner_icon: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  flatlist_container: {
    marginLeft: 25,
    height: Dimensions.get('window').height / 1.37,
  },
  like: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginVertical: 5,
    paddingRight: 20,
    borderRadius: 20,
  },
  likednumber: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: Dimensions.get('window').height / 80,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    marginHorizontal: 7,
    paddingHorizontal: 7,
    borderRadius: 10,
    color: '#5BA366',
  },
  starAndPrice: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 40,
    flexDirection: 'row',
  },
  blur_logo: {
    zIndex: 0,
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 1.7,
    alignSelf: 'center',
  },
  Modalitem: {
    marginVertical: 10,
  },
  Modaltitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 5,
  },
  ModalAllCategory: {
    alignItems: 'center',
  },
  Modalcategory: {
    margin: 3,
    borderRadius: 15,
    borderWidth: 2,
    padding: 5,
    paddingHorizontal: 10,
  },
});
