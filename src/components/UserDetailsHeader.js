import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const UserDetailsHeader = () => {
    const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#323B46',
        paddingTop: 10,
        paddingBottom: 180,
        position: 'relative',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 25,
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name={'arrow-back-sharp'}
            style={{fontSize: 25, color: '#fff'}}
          />
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Profile
        </Text>
        <TouchableOpacity
          style={{backgroundColor: '#3052C1', padding: 5, borderRadius: 9}}>
          <MaterialCommunityIcons
            name={'account-edit'}
            style={{fontSize: 25, color: '#fff'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserDetailsHeader;
