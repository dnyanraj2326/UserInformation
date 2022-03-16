import { View, Text } from 'react-native'
import React from 'react'

const UserDetails = ({ route }) => {
  const {name} = route.params
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default UserDetails