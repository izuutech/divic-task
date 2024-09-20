import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TextInputProps,
} from 'react-native';

interface AppInputProps extends TextInputProps {
  title: string;
  value?: string;
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
}

const AppInput: React.FC<AppInputProps> = ({
  title,
  value,
  isPassword,
  onChangeText,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    if (value) {
      // If there's a value, ensure the label stays above
      Animated.timing(animatedValue, {
        toValue: 1, // Move label up
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 1, // Move label up
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0, // Move label down only if input is empty
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 5], // Move label from input level to top
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Shrink font size when label moves up
    }),
    color: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'], // Change color on focus
    }),
  };

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      <Animated.Text style={labelStyle as any}>{title}</Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
        secureTextEntry={isPassword}
        {...rest} // Pass any additional props to TextInput
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginVertical: 10,
    backgroundColor: '#f0f0f0', // Grey background
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 60, // Adjust height as needed
    justifyContent: 'center',
    borderWidth: 1, // Initial border width (thin border)
    borderColor: '#e0e0e0', // Default grey border
  },
  focusedContainer: {
    borderColor: '#007bff', // Blue border when focused
  },
  input: {
    height: 40,
    fontSize: 16,
    borderWidth: 0, // No border for the input itself
    paddingHorizontal: 0, // Remove padding to align with label
    color: '#000', // Text color
  },
});

export default AppInput;
