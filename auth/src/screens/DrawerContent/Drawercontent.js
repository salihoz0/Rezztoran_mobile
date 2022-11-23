import React from "react";
import {View,StyleSheet} from 'react-native';
import { Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
 } from "react-native-paper"; 
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function DrawerContent(props){
return(
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View>
                        <Avatar.Image
                        source={{uri:'https://media-exp1.licdn.com/dms/image/C4D03AQGaUHw4JPxqzw/profile-displayphoto-shrink_800_800/0/1663406933586?e=2147483647&v=beta&t=jUUew9Mlv2fraOU0l0sKLgdcUHDR6fHStG2uLRTWzGY'}}
                        size={50}
                        />
                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <Drawer.Item  
            icon={({color,size})=>(
            <Icon name='exit-to-app'
            color={color}
            size={size}/>

            )}
            label='Sign Out ' 
            onPress={()=>{}}
            />
        </Drawer.Section>
    </View>

);
};

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });