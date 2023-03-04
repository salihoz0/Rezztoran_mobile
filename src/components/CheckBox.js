import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const CheckBox = (props) => {
    const { selected, onToggle, theme, disableTouchable, text } = props
    const themeColor = theme == "ORANGE" ? 'rgb(237, 176, 7)' : '#000000'

    return (
        <View
            style={{
                marginTop: 10,
                flexDirection: "row",
                height: 30,
                alignItems: "center"
            }}
            {...props.style}
        >
            {
                disableTouchable &&
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            backgroundColor: themeColor,
                            borderRadius: 100,
                            justifyContent: 'center',
                            borderWidth: !selected ? 2 : 0,
                            borderColor: !selected ? themeColor : undefined
                        }}
                    >
                        <Icon name="check" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
                    </View>
                    {
                        text && (
                            <Text style={{
                                marginLeft: 8,
                                color: '#000000',
                                fontSize: 16,
                                lineHeight: 20,
                                letterSpacing: 0.2,
                                fontFamily: 'Poppins-Medium',
                            }}>{text}</Text>
                        )
                    }
                </View>
            }
            {
                !disableTouchable &&
                <TouchableOpacity
                    onPress={() => {
                        onToggle && onToggle(!selected);
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            backgroundColor: selected ? themeColor : '#FFFFFF',
                            borderRadius: 100,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: !selected ? 2 : 0,
                            borderColor: !selected ? themeColor : undefined,
                        }}>
                        <Icon name={"check"} color={"white"} size={14} />
                    </View>

                    {text &&
                        <Text
                            style={{
                                marginLeft: 8,
                                color: '#000000',
                                fontSize: 16,
                                lineHeight: 20,
                                letterSpacing: 0.2,
                                fontFamily: 'Poppins-Medium',
                            }}
                        >{text}</Text>}
                </TouchableOpacity>
            }
        </View>

    )
}

export default CheckBox