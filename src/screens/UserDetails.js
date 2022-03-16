import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import UserDetailsHeader from '../components/UserDetailsHeader';
import UserDetailsCard from '../components/UserDetailsCard';
import UserDetailsAbout from '../components/UserDetailsAbout';

const UserDetails = ({route}) => {
  const {name, username, email, phone, website} = route.params;
  return (
    <View style={{flex: 1}}>
      <UserDetailsHeader />
      <UserDetailsCard name={name} username={username} />
      <UserDetailsAbout email={email} phone={phone} website={website} />
    </View>
  );
};

export default UserDetails;
