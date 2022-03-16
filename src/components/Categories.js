import { View, Text } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={{height:150,backgroundColor:'#0E1114',borderTopLeftRadius:40,borderTopRightRadius:40,marginTop:-50}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:25,paddingTop:30}}>
      <Text style={{color:"#fff",fontSize:17,fontWeight:'bold'}}>Recents</Text>
      <Text style={{color:"#4A5665",fontSize:17,fontWeight:'bold'}}>Favorites</Text>
      <Text style={{color:"#4A5665",fontSize:17,fontWeight:'bold'}}>Missed</Text>
      </View>
    </View>
  )
}

export default Categories