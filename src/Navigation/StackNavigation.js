import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import UserDetails from '../screens/UserDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="UserDetails" component={UserDetails}/>
    </Stack.Navigator>
  )
}

export default StackNavigation