import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../constants';

export default function title({text, style}) {
  return <Text style={{...styles.text, ...style}}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...FONTS.title,
  },
});
