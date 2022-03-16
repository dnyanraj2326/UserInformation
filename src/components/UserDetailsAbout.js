import {View, Text} from 'react-native';
import React from 'react';

const UserDetailsAbout = ({email, phone, website}) => {
  return (
    <View style={{marginTop: 150, paddingHorizontal: 20}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#eee',
          borderRadius: 15,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: '#203239',
            fontWeight: '600',
            fontSize: 17,
            paddingBottom: 5,
          }}>
          Email :
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          {email}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#eee',
          borderRadius: 15,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: '#203239',
            fontWeight: '600',
            fontSize: 17,
            paddingBottom: 5,
          }}>
          Phone :
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          {phone}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#eee',
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: '#203239',
            fontWeight: '600',
            fontSize: 17,
            paddingBottom: 5,
          }}>
          Website :
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          {website}
        </Text>
      </View>
    </View>
  );
};

export default UserDetailsAbout;
