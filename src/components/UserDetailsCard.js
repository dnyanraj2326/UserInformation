import {View, Text, Image} from 'react-native';
import React from 'react';

const UserDetailsCard = ({name, username}) => {
  return (
    <View
      style={{
        paddingVertical: 30,
        paddingHorizontal: 80,
        backgroundColor: '#eee',
        borderRadius: 20,
        position: 'absolute',
        top: 140,
        left: 40,
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={{width: 120, height: 120, borderRadius: 60}}
        />
      </View>
      <View style={{paddingTop: 10}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#000',
            fontSize: 17,
          }}>
          {name}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            color: '#000',
            fontSize: 13,
          }}>
          #{username}
        </Text>
      </View>
    </View>
  );
};

export default UserDetailsCard;
