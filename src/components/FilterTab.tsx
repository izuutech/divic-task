import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FilterTab = ({title}: {title: string}) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setActive(prev => !prev)}
      style={[
        styles.container,
        active ? {borderWidth: 1, borderColor: '#2F50C1'} : {},
      ]}>
      <Text
        style={[styles.text, active ? {color: '#2F50C1'} : {color: '#58536E'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F4F2F8',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
  },
});

export default FilterTab;
