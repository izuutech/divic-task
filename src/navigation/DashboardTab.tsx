import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import ShippingList from '../screens/ShippingList';
import EmptyScreen from '../screens/EmptyScreen';
import CustomTabBar from '../components/CustomTabbar';

export type DashboardBottomTabParamList = {
  ShippingList: undefined;
  Wallet: undefined;
  Scan: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<DashboardBottomTabParamList>();

function DashboardTab() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'DMSans_Regular',
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="ShippingList"
        component={ShippingList}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Scan"
        component={EmptyScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Wallet"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={EmptyScreen}
      />
    </Tab.Navigator>
  );
}

export default DashboardTab;
