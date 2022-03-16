import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={{ backgroundColor:'#323B46',height:150}}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:25,marginTop:30}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={{width: 40, height: 40, borderRadius: 10}}
        />
        <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Information</Text>
        <TouchableOpacity style={{backgroundColor:'#3052C1',padding:5,borderRadius:9}}>
                  <Entypo name={'plus'} style={{fontSize:25,color:'#fff',}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
