import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import AppSearchInput from '../components/AppSearchInput';
import AppButton from '../components/AppButton';
import {FilterIcon, ScanIcon} from '../assets/svgs';

const ShippingList = () => {
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
        <Text style={styles.body}>Mark All</Text>
      </View>
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
  btn: {
    width: '48%',
  },
  h2: {
    fontSize: 18,
    fontWeight: '800',
  },
  body: {
    color: '#2F50C1',
  },
});

export default ShippingList;
