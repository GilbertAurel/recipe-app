import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import landing from './home/landing';
import search from './home/search';
import bookmarks from './home/bookmarks';
import setting from './home/setting';

const Tabs = createBottomTabNavigator();

const tabs = () => {
  return (
    <Tabs.Navigator initialRouteName="landing">
      <Tabs.Screen name="landing" component={landing} />
      <Tabs.Screen name="search" component={search} />
      <Tabs.Screen name="bookmarks" component={bookmarks} />
      <Tabs.Screen name="setting" component={setting} />
    </Tabs.Navigator>
  );
};

export default tabs;
