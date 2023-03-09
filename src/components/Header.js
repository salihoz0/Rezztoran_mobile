import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = (props) => {
    const { title, firstIconName, secondIconName, onPress1, onPress2 } = props
    return (
        <>
            {
                secondIconName !== undefined ? (
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>{title}</Text>
                        <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={onPress1}>
                                <Icon name={firstIconName} size={25} style={{ color: 'rgb(212, 123, 51)' }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPress2}>
                                <Icon name={secondIconName} size={25} style={{ color: 'rgb(212, 123, 51)' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>{title}</Text>
                        <TouchableOpacity onPress={onPress1} >
                            <Icon name={firstIconName} size={30} style={{ color: 'rgb(212, 123, 51)' }} />
                        </TouchableOpacity>
                    </View>
                )
            }
            <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#E1E1E1',
                    marginBottom: 12,
                    alignItems: "center",
                }}
            />
        </>
    )
}

export default Header

{/* <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Keşfet</Text>
          <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => setPage(2)}>
              <Icon name="filter" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPage(1)}>
              <Icon name="heart" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
            </TouchableOpacity>
          </View> */}

/*
<View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginTop: 10 }}>
<Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Favoriler</Text>
<TouchableOpacity onPress={goBack} >
<Icon name="home" size={30} style={{ color: 'rgb(212, 123, 51)' }} />
</TouchableOpacity>
</View>
*/