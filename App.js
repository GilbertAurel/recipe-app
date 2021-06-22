import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import tabs from './screen/tabs';
import login from './screen/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        headerMode={{
          showHeader: false,
        }}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="tabs" component={tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
