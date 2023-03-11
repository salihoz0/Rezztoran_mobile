import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StarComponent from '../../components/StarComponent'

const Comment = (props) => {
    const { data, goBack } = props;

    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    borderRadius: 10,
                    borderColor: '#d3d3d3',
                    width: '100%',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1
                    }}
                >
                    <StarComponent count={item.star} select="star" comment={true} />
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 10,
                            marginLeft: 5,
                            flex: 1,
                            color: '#000000'
                        }}
                    >
                        {item.comment}
                    </Text>
                </View>
                <Text
                    style={{
                        color: 'rgb(212, 123, 51)',
                        fontSize: 10,
                    }}
                >{item.name}</Text>
            </View >

        )
    }

    return (
        <>

            <View
                style={{
                    marginTop: 10,
                    backgroundColor: 'rgb(240, 238, 230)',
                    borderColor: 'rgb(217, 213, 169)',
                    marginHorizontal: 10,
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 1
                }}
            >

                <Text
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgb(237, 176, 7)',
                        width: '100%',
                        textAlign: 'center',
                        paddingVertical: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        fontSize: 15,
                        color: 'rgb(212, 123, 51)',
                        fontFamily: 'Inter-Bold',
                        marginBottom: 5
                    }}
                >Yorumlar</Text>
                {
                    data.map((item) => <RenderItem item={item} />)
                }
            </View>
        </>
    )
}

export default Comment;

// şimdilik kalsın