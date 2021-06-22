import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {IMAGES, COLORS, SIZES, FONTS} from '../../constants';
import Title from '../../components/title';
import Button from '../../components/button';
import LoginBackground from './background';

export default function third({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('tabs');
  };

  return (
    <View style={styles.container}>
      <LoginBackground image={IMAGES.syringe2} />
      <View style={styles.titleContainer}>
        <Title style={{color: COLORS.primary}} text="Lorem Ipsum" />
        <Text style={styles.details}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa
          incidunt odit illo magnam officia explicabo temporibus quaerat sint
          saepe.
        </Text>
        <Button
          onPressHandler={onPressHandler}
          style={{marginTop: 30}}
          text="Login"
        />
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
    justifyContent: 'flex-end',
    backgroundColor: COLORS.bright,
  },
  titleContainer: {
    width: SIZES.width * 0.8,
    marginBottom: 200,
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
