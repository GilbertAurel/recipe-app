import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {SIZES} from '../../constants';

export default function background({image}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: SIZES.height,
    width: SIZES.width,
  },
  imageContainer: {
    height: SIZES.height,
    width: SIZES.width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageGradient: {
    height: SIZES.height,
    width: SIZES.width,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
});
