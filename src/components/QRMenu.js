import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const QRMenu = (props) => {
    const { goBack } = props
    return (
        <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>QR Menu</Text>
                <TouchableOpacity onPress={goBack} >
                    <Icon name="home" size={30} style={{ color: 'rgb(212, 123, 51)' }} />
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: "center",
                position: "absolute",
                zIndex: -2,
            }}>
                {/* <FastImage
                        style={{
                            marginTop: 10,
                            height: 250,
                            width: 250,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        resizeMode="contain"
                        source={}>
                        <FastImage
                            style={{
                                height: 230,
                                width: 230,
                                borderRadius: 5,
                            }}
                            source={{ uri: imageUrl }}
                            resizeMode="contain"
                        />
                    </FastImage> */}

            </View>

            <View
                style={{
                    position: "absolute",
                    backgroundColor: "white",
                    zIndex: -1,
                    marginTop: 60,
                    height: 450,
                    width: 375,
                }} />
            <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#E1E1E1',
                    marginBottom: 12,
                    alignItems: "center",
                }}
            />
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 60,
                }}>
                <View
                    style={{
                        marginTop: 32,
                        marginHorizontal: 40,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 12,
                            lineHeight: 18,
                            textAlign: "center",
                            letterSpacing: 0.2,
                            color: "#000",
                            marginBottom: 24,
                        }}
                    >QR Kodunuz oluşturuldu. Paylaş butonu ile paylaşabilirsiniz.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default QRMenu