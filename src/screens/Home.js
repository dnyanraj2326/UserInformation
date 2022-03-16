import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import ContactList from '../components/ContactList'

const Home = () => {
  return (
    <View style={{flex:1,}}>
    <StatusBar backgroundColor={"#323B46"} />
      <Header />
      <Categories />
      <ContactList />
    </View>
  )
}

export default Home