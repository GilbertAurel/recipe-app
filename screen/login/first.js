import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {IMAGES, COLORS, SIZES, FONTS} from '../../constants';
import Title from '../../components/title';
import Button from '../../components/button';
import LoginBackground from './background';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function first() {
  return (
    <View style={styles.container}>
      <LoginBackground image={IMAGES.syringe3} />
      <View style={styles.titleContainer}>
        <Title style={{color: COLORS.primary}} text="Welcome to" />
        <Title style={{color: COLORS.primary}} text="Vacinne Helpdesk" />
        <Text style={styles.details}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          quae vero aut ullam suscipit asperiores natus aperiam nihil ipsum!
        </Text>
        <View style={styles.swipeContainer}>
          <Text style={styles.swipe}>swipe</Text>
          <MaterialIcons name="east" size={20} color={COLORS.primary} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: COLORS.bright,
  },
  titleContainer: {
    width: SIZES.width * 0.8,
    marginTop: 130,
  },
  details: {
    width: '80%',
    marginTop: 20,
    color: COLORS.dark,
    ...FONTS.body3,
  },
  swipeContainer: {
    height: 40,
    width: 100,
    marginTop: 20,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: COLORS.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  swipe: {
    marginRight: 10,
    color: COLORS.dark,
    ...FONTS.body1,
  },
});
