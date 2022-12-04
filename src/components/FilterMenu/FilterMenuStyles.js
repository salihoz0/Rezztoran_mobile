import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
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
    padding: 5,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    width:Dimensions.get('window').width/2,
    alignSelf:'center'
  },

});
