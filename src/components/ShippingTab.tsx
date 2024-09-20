import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CheckBox} from 'react-native-btr';
import {BoxIcon, ExpandIcon, RightIcon} from '../assets/svgs';

const ShippingTab = ({allChecked}: {allChecked: boolean}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(allChecked);
  }, [allChecked]);
  return (
    <View style={styles.container}>
      <View style={{width: 15, height: 15}}>
        <CheckBox
          checked={checked}
          borderWidth={1}
          borderRadius={2}
          color={'#2F50C1'}
          onPress={() => setChecked(prev => !prev)}
        />
      </View>
      <BoxIcon />
      <View style={styles.detailsbox}>
        <Text>AWB</Text>
        <Text style={styles.id}>41785691423</Text>
        <View style={styles.destinationbox}>
          <Text style={styles.location}>41785691423</Text>
          <RightIcon />
          <Text style={styles.location}>41785691423</Text>
        </View>
      </View>
      <View style={styles.statusbox}>
        <Text style={styles.status}>RECEIVED</Text>
      </View>
      <View style={styles.expandCircle}>
        <ExpandIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F2F8',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: '3%',
    marginBottom: 10,
  },
  detailsbox: {
    width: '40%',
  },
  id: {
    fontWeight: '700',
    marginVertical: 5,
  },
  destinationbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  location: {
    fontSize: 8,
  },
  statusbox: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#D9E6FD',
    borderRadius: 5,
  },
  status: {
    color: '#2F50C1',
    fontSize: 10,
  },
  expandCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShippingTab;
