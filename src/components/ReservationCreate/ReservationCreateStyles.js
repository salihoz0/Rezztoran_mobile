import {StyleSheet, Dimensions} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex:1  },
  starAndPrice: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    marginTop: 10,
    flex: 1,
    height: Dimensions.get('window').height / 1.8,
  },
  backgr: {
    flex: 1,
  },
  number: {
    margin: 10,
    },
  numberTextContain: {
    flexDirection: 'row',
    height: 28,

  },
  numberText:{
    color:'red',
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.04,
    height: Dimensions.get('window').height / 8,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 30,
    alignSelf: 'center',
    width: Dimensions.get('window').width/1.1,
    borderColor: '#1e88e5',
    backgroundColor: 'white',
    margin: 2,
    marginTop: 0,
    height: Dimensions.get('window').height / 15,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  datePick: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth:1,
    flexDirection: 'row',
    margin: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  datePickInner: {
    flexDirection: 'row',
    margin: 10,
    paddingLeft:10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
