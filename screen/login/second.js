import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IMAGES, COLORS, SIZES, FONTS} from '../../constants';
import Title from '../../components/title';
import Button from '../../components/button';
import LoginBackground from './background';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function second() {
  return (
    <View style={styles.container}>
      <LoginBackground image={IMAGES.syringe1} />
      <View style={styles.titleContainer}>
        <Title style={{color: COLORS.primary}} text="Lorem Ipsum" />
        <Text style={styles.details}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa
          incidunt odit illo magnam officia explicabo temporibus quaerat sint
          saepe.
        </Text>
      </View>
      <View style={styles.swipeContainer}>
        <Text style={styles.swipe}>swipe</Text>
        <MaterialIcons name="east" size={20} color={COLORS.primary} />
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
    justifyContent: 'center',
    backgroundColor: COLORS.bright,
  },
  titleContainer: {
    width: SIZES.width * 0.8,
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    width: '80%',
    marginTop: 20,
    color: COLORS.dark,
    textAlign: 'center',
    ...FONTS.body3,
  },
  swipeContainer: {
    height: 40,
    width: 100,
    marginTop: 20,
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
