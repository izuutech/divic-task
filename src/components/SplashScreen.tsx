import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';

const SplashScreen = () => {
  // Animated values for scaling and flipping
  const imageScale = useRef(new Animated.Value(0.1)).current;
  const imageFlip = useRef(new Animated.Value(0)).current; // Starts at 0 (no rotation)

  useEffect(() => {
    // Parallel animation: scale the image and flip it at the same time
    Animated.parallel([
      // Scaling animation
      Animated.timing(imageScale, {
        toValue: 1.5, // Full size at the end of the animation
        duration: 2000, // 3 seconds
        useNativeDriver: true,
      }),
      // Flipping animation - it flips at halfway (1500ms)
      Animated.timing(imageFlip, {
        toValue: 180, // Rotate 180 degrees on the Y-axis
        duration: 2000, // Same duration as scaling, flips halfway
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Interpolate the image flip from 0 to 180 degrees (flip at 1500ms)
  const flipInterpolate = imageFlip.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/pngs/logo.png')}
        style={[
          styles.image,
          {
            transform: [
              {scale: imageScale}, // Apply scaling
              {rotateX: flipInterpolate}, // Apply vertical flip
            ],
          },
        ]}
        resizeMode="contain" // Maintain aspect ratio
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200, // Initial image size
    height: 200,
  },
});

export default SplashScreen;
