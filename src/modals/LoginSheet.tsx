import React, {useEffect, useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {BottomSheetModal, useBottomSheetModal} from '@gorhom/bottom-sheet';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {ChevronIcon} from '../assets/svgs';
import {useNavigation} from '@react-navigation/native';

interface BlockBottomSheetProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  closeBottomSheet: () => void;
}

const LoginSheet = ({
  bottomSheetModalRef,
  closeBottomSheet,
}: BlockBottomSheetProps) => {
  const [form, setForm] = useState({username: '', password: ''});
  const navigation = useNavigation<any>();
  const blockSnapPoints = useMemo(() => ['20%', '50%', '60%', '85%'], []);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      name={'NotificationMenuSheet'}
      index={3}
      snapPoints={blockSnapPoints}
      handleIndicatorStyle={styles.bottomSheetIndicatorStyle}
      backgroundStyle={{
        borderRadius: 30,
      }}
      //   backdropComponent={props => renderBottomSheetBackdrop(props, 0.5)}
      onChange={index => {
        if (index < 0) {
          closeBottomSheet();
        }
      }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={closeBottomSheet} style={styles.cancelbox}>
          <ChevronIcon />
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.subtitle}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>
        <View style={styles.space} />
        <AppInput
          title="Username/Email"
          value={form.username}
          onChangeText={text => setForm(prev => ({...prev, username: text}))}
        />
        <AppInput
          title="Password"
          isPassword
          value={form.password}
          onChangeText={text => setForm(prev => ({...prev, password: text}))}
        />
        <AppButton
          title="Login"
          backgroundColor="#2F50C1"
          textColor={'white'}
          containerStyle={styles.btn}
          onPress={() => {
            closeBottomSheet();
            navigation.navigate('ShippingList');
          }}
        />
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  bottomSheetIndicatorStyle: {
    backgroundColor: '#F4F4F4',
    margin: 0,
    padding: 0,
    height: 5,
    width: 46,
  },
  container: {
    flex: 1,
    marginVertical: '2.5%',
    paddingHorizontal: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  cancelbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cancel: {
    color: '#4561DB',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    color: 'black',
    fontFamily: 'titleFont',
    fontSize: 33,
    paddingVertical: 10,
    fontWeight: '600',
  },
  subtitle: {
    color: '#757281',
    fontFamily: 'titleFont',
    fontSize: 15,
  },
  space: {
    height: 30,
  },
  btn: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    marginLeft: '5%',
  },
});

export default LoginSheet;
