import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#088d7c',
  secondary: '#39afa1',
  dark: '#1f3d57',
  bright: '#F1F5F9',
  inactive: '#e1e5e9',
  white: '#fff',
  black: '#000',
};

export const SIZES = {
  width: width,
  height: height,
  paddingNormal: 10,
  paddingWide: 20,
  radius: 30,

  icon: 26,
  title: 40,
  h1: 28,
  h2: 22,
  h3: 20,
  body1: 18,
  body2: 16,
  body3: 14,
};

export const FONTS = {
  title: {
    fontFamily: 'whitneybold',
    fontSize: SIZES.title,
    lineHeight: 45,
  },
  h1: {fontFamily: 'whitneysemibold', fontSize: SIZES.h1, lineHeight: 30},
  h2: {fontFamily: 'whitneymedium', fontSize: SIZES.h2, lineHeight: 22},
  h3: {fontFamily: 'whitneymedium', fontSize: SIZES.h3, lineHeight: 22},

  body1: {fontFamily: 'whitneymedium', fontSize: SIZES.body1, lineHeight: 20},
  body2: {fontFamily: 'whitneymedium', fontSize: SIZES.body2, lineHeight: 20},
  body3: {fontFamily: 'whitneymedium', fontSize: SIZES.body3, lineHeight: 20},

  body3Low: {
    fontFamily: 'whitneymedium',
    fontSize: SIZES.body3,
    lineHeight: 15,
  },
};
