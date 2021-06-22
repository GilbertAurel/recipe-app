import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';

import leaves from '../assets/images/leaves.jpg';

const opening = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141414" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your</Text>
        <Text style={styles.title}>Travel</Text>
        <Text style={styles.title}>Guide</Text>
      </View>

      <Image source={leaves} resizeMode="cover" style={styles.leavesImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#141414',
  },
  titleContainer: {
    position: 'absolute',
  },
  title: {
    color: '#fff',
  },
  leavesImage: {
    height: 600,
    width: 400,
    borderRadius: 20,
  },
});

export default opening;
