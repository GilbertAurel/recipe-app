import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../constants';

export default function buttons({onPressHandler, style, text}) {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      onPress={() => onPressHandler()}>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  label: {
    color: COLORS.bright,
    ...FONTS.body1,
  },
});
