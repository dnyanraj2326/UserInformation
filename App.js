import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;
