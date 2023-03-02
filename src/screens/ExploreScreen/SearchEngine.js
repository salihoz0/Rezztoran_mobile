import { View, Text, Button } from 'react-native'
import React from 'react'

const SearchEngine = (props) => {
  const {goBack} = props
  return (
    <View>
      <Text>SearchEngine</Text>
      <Button title="Geri" onPress={goBack} />
    </View>
  )
}

export default SearchEngine