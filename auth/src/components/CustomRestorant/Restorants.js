import React from "react";
import { View, Text, Image, SafeAreaView,FlatList,StyleSheet,Dimensions} from 'react-native';

const Restorants = ({ Restorant }) => {
    return (
        
        <View  >
          
            <View style={styles.container}  >
                <Image style={{width:(Dimensions.get('window').width/3.2),height:100,borderRadius:8}}  source={{ uri: Restorant.imgURL }} />
                <Text style={styles.text} >{Restorant.title} </Text>
        
            </View>
        </View>
    )}

    const styles=StyleSheet.create({
      text:{textAlign:'center'},
      container:{
        width:Dimensions.get('window').width/3,
        alignItems:'center',
        
        
      },
    }); 
    export default Restorants