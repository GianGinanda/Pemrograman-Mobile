import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Navigasi/SplashScreen';
import LandingPage from './Navigasi/LandingPage';
import RegisPage from './Navigasi/RegisPage';
import HomePage from './Navigasi/HomePage';
import TransaksiHistoryPage from './Navigasi/TransaksiHistoryPage';
import IconHome from './assets/icons/home.svg';
import IconTransasi from './assets/icons/TransferBar.svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopUpPage from './Navigasi/TopUpPage';
import PaymentPage from './Navigasi/PaymentPage';
import TransferPage from './Navigasi/TransferPage';
import TopUpSuccesspage from './Navigasi/TopUpSuccesspage';
import PaymentConfirmation from './Navigasi/PaymentConfirmation';
import PaymentSuccess from './Navigasi/PaymentSuccess';
import TransferConfirmation from './Navigasi/TransferConfirmation';
import TransferSuccess from './Navigasi/TransferSuccess';
import ProfilePage from './Navigasi/ProfilePage';
import GambarProfil from './assets/icons/profile.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarIcon: tabState => {
            return (
              <IconHome
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Transaksi"
        component={TransaksiHistoryPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Transaksi',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarIcon: tabState => {
            return (
              <IconTransasi
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarLabel: 'Profil',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarIcon: tabState => {
            return (
              <GambarProfil
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer initialRouteName="TabBar">
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Landing"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Regis"
          component={RegisPage}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Registrasi',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUpPage}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Top Up',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentPage}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'QR Payment',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={TransferPage}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Transfer',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="TopUpsuccessPage"
          component={TopUpSuccesspage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmation}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Payment Confirmation',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferConfirmation"
          component={TransferConfirmation}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Payment Confirmation',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
