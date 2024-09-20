import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../components/SplashScreen';
import {useState, useEffect} from 'react';
import Onboarding from '../screens/Onboarding';
import ShippingList from '../screens/ShippingList';
import DashboardTab from './DashboardTab';
import {useAppStore} from '../store/appStore';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isLoading, setIsLoading] = useState(true);
  const {loggedIn} = useAppStore(state => state);
  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {loggedIn ? (
            <Stack.Screen name="DashboardTab" component={DashboardTab} />
          ) : (
            <Stack.Screen name="Onboarding" component={Onboarding} />
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
