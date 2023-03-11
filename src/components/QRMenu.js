import React, { useRef } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Button,
    SafeAreaView,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header'
import Share from 'react-native-share'
import ViewShot from 'react-native-view-shot'
import qr from '../../assets/QRexample.png'

const QRMenu = (props) => {
    const { goBack } = props
    const viewShotRef = useRef();

    const onClick = async () => {
        const imageURI = await viewShotRef.current.capture();
        Share.open({
            url: imageURI,
        })
    };

    return (
        <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Header title='QR Menu' firstIconName='home' onPress1={goBack} />

            <View style={{
                alignItems: "center",
                position: "absolute",
                zIndex: -2,
            }}>
                <ViewShot
                    ref={viewShotRef}
                    style={{
                        marginTop: 60,
                        alignItems: "center",
                        backgroundColor: "white",
                        height: 340,
                        width: 275,
                    }}
                    options={{ format: "png", quality: 1.0, result: "data-uri" }}
                >
                    <Image
                        style={{
                            height: 230,
                            width: 230,
                            borderRadius: 5,
                            borderWidth: 1,
                            padding: 10,
                            borderColor: 'rgb(237, 176, 7)'
                        }}
                        source={qr}
                        resizeMode="contain"
                    />
                    <Text
                        numberOfLines={3}
                        style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: 12,
                            lineHeight: 20,
                            marginTop: 10,
                            textAlign: "center",
                            letterSpacing: 0.2,
                            color: "#000",
                            marginBottom: 24,
                        }}
                    >Restoran Bilgilerini görmek görmek için QR kodunu okutunuz.</Text>
                </ViewShot>
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
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 60,
                }}>
                <Image
                    style={{
                        height: 230,
                        width: 230,
                        borderRadius: 5,
                        borderWidth: 1,
                        padding: 10,
                        borderColor: 'rgb(237, 176, 7)'
                    }}
                    source={qr}
                    resizeMode="contain"
                />
                <View
                    style={{
                        marginTop: 32,
                        marginHorizontal: 40,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: 12,
                            lineHeight: 18,
                            textAlign: "center",
                            letterSpacing: 0.2,
                            color: "#000",
                            marginBottom: 24,
                        }}
                    >QR Kodunuz oluşturuldu. Paylaş butonu ile paylaşabilirsiniz.</Text>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#0cc45c',
                            backgroundColor: '#b4e6c2',
                            alignItems: 'center',
                            paddingVertical: 10,
                            borderRadius: 10,
                            paddingHorizontal: 20
                        }}
                        onPress={() => onClick()}>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 15,
                                fontFamily: 'Poppins-Medium'
                            }}
                        >PAYLAŞ</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default QRMenu


/*
              <TouchableOpacity onPress={() => { navigation.navigate('TabNavigation', { screen: 'Rezervasyon' }) }} style={{
                borderWidth: 1,
                borderColor: '#0cc45c',
                backgroundColor: '#b4e6c2',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 20,
                width: '40%'
              }}>
                <Text style={{ color: '#0cc45c', fontFamily: 'Inter-Bold' }}>Rezervasyon</Text>
              </TouchableOpacity>
*/