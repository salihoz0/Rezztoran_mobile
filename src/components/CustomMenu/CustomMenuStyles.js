import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    height: Dimensions.get('window').height / 2.1,
  },
  inner_container: {
    height: Dimensions.get('window').height / 2.4,
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
    fontFamily: 'Poppins-Thin',
    marginTop: 10,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontStyle: 'italic',
  },
  button: {
    width: Dimensions.get('window').width / 2.2,
    borderColor: 'purple',
  },
  comment_container: {
    borderColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 20,
    margin: 3,
    padding: 5,
    flexDirection: 'row',
    justifyContent:'space-between'

  },
  comment:{
    alignItems:'flex-start',
    width: Dimensions.get('window').width/1.5,
    padding:10,
    marginLeft:10,
    backgroundColor:'white',
    borderRadius:20
  },
  comment_icon:{
    justifyContent:'center'
  }
});
