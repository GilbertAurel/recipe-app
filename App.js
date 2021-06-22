import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import tabs from './screen/tabs';
import opening from './screen/opening';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="opening"
        headerMode={{
          showHeader: false,
        }}>
        <Stack.Screen name="opening" component={opening} />
        <Stack.Screen name="tabs" component={tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
