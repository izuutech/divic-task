import React from 'react';
import {StyleSheet, View} from 'react-native';

const EmptyScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default EmptyScreen;
