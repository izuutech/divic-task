import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {LogoNameIcon} from '../assets/svgs';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import LoginSheet from '../modals/LoginSheet';
import {BottomSheetModal, useBottomSheet} from '@gorhom/bottom-sheet';

const Onboarding = ({navigation}: any) => {
  const {navigate} = useNavigation<any>();
  const loginSheetRef = useRef<BottomSheetModal>(null);
  const closeBottomSheet = () => {
    loginSheetRef?.current?.dismiss();
  };

  return (
    <View style={styles.mainContainer}>
      <LogoNameIcon />
      <AppButton
        title="Login"
        containerStyle={styles.btn}
        onPress={() => loginSheetRef.current?.present()}
      />
      <LoginSheet
        closeBottomSheet={closeBottomSheet}
        bottomSheetModalRef={loginSheetRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: '#2F50C1',
  },
  btn: {
    position: 'absolute',
    bottom: 100,
  },
});

export default Onboarding;
