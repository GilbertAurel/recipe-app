import React, {useRef} from 'react';
import {View, StyleSheet, Animated, StatusBar} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import first from './first';
import second from './second';
import third from './third';
import Button from '../../components/button';

const stack = [first, second, third];

export default function index({navigation}) {
  const scrollRef = useRef(new Animated.Value(0)).current;

  function Body() {
    return (
      <Animated.ScrollView
        horizontal
        snapToStart
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollRef,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        {stack?.map((Screen, index) => (
          <Screen key={`item-${index}`} navigation={navigation} />
        ))}
      </Animated.ScrollView>
    );
  }

  function RenderDots() {
    const dotPosition = Animated.divide(scrollRef, SIZES.width);
    return (
      <View style={styles.dotsContainer}>
        {stack?.map((item, index) => {
          const width = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });

          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dots-${index}`}
              style={{...styles.dots, width: width, opacity: opacity}}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Body />
      <RenderDots />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.secondary,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dots: {
    height: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});
