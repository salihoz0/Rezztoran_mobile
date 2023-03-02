import { View, Text, Button } from 'react-native'
import React from 'react'

const Favorites = (props) => {
    const {goBack} = props
  return (
    <View>
      <Text>Favorites</Text>
      <Button title="Geri" onPress={goBack}/>
    </View>
  )
}

export default Favorites