import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BellIcon, BlueIcon} from '../assets/svgs';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgbox}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          width={40}
          height={40}
        />
      </View>
      <BlueIcon />
      <View style={styles.bellbox}>
        <BellIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  imgbox: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: 'hidden',
  },
  bellbox: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#F4F2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppHeader;
