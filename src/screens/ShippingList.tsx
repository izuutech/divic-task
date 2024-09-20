import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import AppSearchInput from '../components/AppSearchInput';
import AppButton from '../components/AppButton';
import {FilterIcon, ScanIcon} from '../assets/svgs';
import ShippingTab from '../components/ShippingTab';
import FilterSheet from '../modals/FilterSheet';
import {CheckBox} from 'react-native-btr';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

const ShippingList = () => {
  const [checked, setChecked] = useState(false);
  const filterSheetRef = useRef<BottomSheetModal>(null);
  const closeBottomSheet = () => {
    filterSheetRef?.current?.dismiss();
  };
  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={styles.greeting}>Hello,</Text>
      <Text style={styles.name}>Ibrahim Shaker</Text>
      <AppSearchInput placeholder="Search" />
      <View style={styles.row}>
        <AppButton
          leftIcon={<FilterIcon />}
          backgroundColor={'#F4F2F8'}
          textColor={'#58536E'}
          title="Filters"
          containerStyle={styles.btn}
          onPress={() => filterSheetRef.current?.present()}
        />
        <AppButton
          leftIcon={<ScanIcon />}
          backgroundColor={'#2F50C1'}
          textColor={'white'}
          title="Add Scan"
          containerStyle={styles.btn}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.h2}>Shipments</Text>
        <View style={styles.markbox}>
          <CheckBox
            checked={checked}
            borderWidth={1}
            borderRadius={2}
            color={'#2F50C1'}
            onPress={() => setChecked(prev => !prev)}
          />
          <Text style={styles.body}>Mark All</Text>
        </View>
      </View>
      <FlatList data={[1, 2, 3]} renderItem={() => <ShippingTab />} />
      <FilterSheet
        closeBottomSheet={closeBottomSheet}
        bottomSheetModalRef={filterSheetRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 16,
  },
  name: {
    fontSize: 25,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  markbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: '48%',
  },
  h2: {
    fontSize: 18,
    fontWeight: '800',
  },
  body: {
    color: '#2F50C1',
    marginLeft: 5,
  },
});

export default ShippingList;
