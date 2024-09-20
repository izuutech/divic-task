import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {
  BoxesIcon,
  ProfileIcon,
  ScanBottomIcon,
  WalletIcon,
} from '../assets/svgs';

export default function CustomTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={[
          styles.container,
          {
            display: 'flex',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            bottom: 0,
          },
        ]}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, {});
              // navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              style={{width: '20%'}}>
              {isFocused ? (
                <>
                  {route.name === 'ShippingList' ? (
                    <View style={styles.section}>
                      <BoxesIcon fill={'#2F50C1'} />
                      <Text style={[styles.tabText, {color: '#2F50C1'}]}>
                        Home
                      </Text>
                    </View>
                  ) : route.name === 'Scan' ? (
                    <View style={styles.section}>
                      <ScanBottomIcon fill={'#2F50C1'} />
                      <Text style={[styles.tabText, {color: '#2F50C1'}]}>
                        Scan
                      </Text>
                    </View>
                  ) : route.name === 'Wallet' ? (
                    <View style={styles.section}>
                      <WalletIcon fill={'#2F50C1'} />
                      <Text style={[styles.tabText, {color: '#2F50C1'}]}>
                        Wallet
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.section}>
                      <ProfileIcon fill={'#2F50C1'} />
                      <Text style={[styles.tabText, {color: '#2F50C1'}]}>
                        Profile
                      </Text>
                    </View>
                  )}
                </>
              ) : (
                <>
                  {route.name === 'ShippingList' ? (
                    <View style={styles.section}>
                      <BoxesIcon fill={'#A7A3B3'} />
                      <Text style={styles.tabText}>Home</Text>
                    </View>
                  ) : route.name === 'Scan' ? (
                    <View style={styles.section}>
                      <ScanBottomIcon fill={'#A7A3B3'} />
                      <Text style={styles.tabText}>Scan</Text>
                    </View>
                  ) : route.name === 'Wallet' ? (
                    <View style={styles.section}>
                      <WalletIcon fill={'#A7A3B3'} />
                      <Text style={styles.tabText}>Wallet</Text>
                    </View>
                  ) : (
                    <View style={styles.section}>
                      <ProfileIcon fill={'#A7A3B3'} />
                      <Text style={styles.tabText}>Profile</Text>
                    </View>
                  )}
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: '2.5%',
  },
  section: {alignItems: 'center'},
  tabText: {
    fontSize: 10,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
