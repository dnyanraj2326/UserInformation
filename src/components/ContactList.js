import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ContactsCard from './ContactsCard';

const ContactList = () => {
  // console.log(`this is all my ada : ${contactUser}`)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#323B46',
        marginTop: -70,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
      <View style={{paddingHorizontal: 25, paddingTop: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContactsCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default ContactList;
