import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Svg, {Path} from 'react-native-svg';

import landing from './home/landing';
import search from './home/search';
import bookmarks from './home/bookmarks';
import setting from './home/setting';
import {COLORS, SIZES} from '../constants';

const Tabs = createBottomTabNavigator();

const TabBarCustomButton = ({children, navigation}) => {
  return (
    <View style={styles.customButtonContainer}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('login')}>
        {children}
      </TouchableOpacity>
      <Svg
        style={styles.customButtonBackground}
        width="100"
        height="79"
        viewBox="0 0 100 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50 44C70.3329 44 87.5161 30.5147 93.0937 12H93.1175C94.4232 7.44067 96.817 3.341 100 -7.62939e-05V79H0V-7.62939e-05C3.18295 3.341 5.57677 7.44067 6.8825 12H6.90628C12.4839 30.5147 29.6671 44 50 44Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default function tabs({navigation}) {
  return (
    <Tabs.Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        style: styles.tab,
      }}>
      <Tabs.Screen
        name="home"
        component={landing}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                ...styles.normalButtonContainer,
                borderTopLeftRadius: 30,
              }}>
              <MaterialIcons
                name="home"
                size={SIZES.icon}
                color={focused ? COLORS.primary : COLORS.inactive}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        component={search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.normalButtonContainer}>
              <MaterialIcons
                name="search"
                size={SIZES.icon}
                color={focused ? COLORS.primary : COLORS.inactive}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        component={search}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="qr-code-scanner"
              size={SIZES.icon}
              color={COLORS.bright}
            />
          ),
          tabBarButton: props => (
            <TabBarCustomButton {...props} navigation={navigation} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        component={bookmarks}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.normalButtonContainer}>
              <MaterialIcons
                name="bookmark"
                size={SIZES.icon}
                color={focused ? COLORS.primary : COLORS.inactive}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        component={setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                ...styles.normalButtonContainer,
                borderTopRightRadius: 30,
              }}>
              <MaterialIcons
                name="settings"
                size={SIZES.icon}
                color={focused ? COLORS.primary : COLORS.inactive}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
  },
  normalButtonContainer: {
    height: 80,
    width: (SIZES.width - 100) * 0.25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  customButtonContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonBackground: {
    position: 'absolute',
  },
  customButton: {
    height: 70,
    width: 70,
    top: -40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    zIndex: 1000,
  },
});
