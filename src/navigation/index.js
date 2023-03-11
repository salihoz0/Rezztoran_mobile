import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import RestorantDetailScreen from '../screens/RestorantDetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfilesScreen from '../screens/ProfilesScreen/Profiles';
import ReservationsScreen from '../screens/ResevervationsScreen';
import Coupon from '../screens/Coupon/Coupon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.authStore)
  const StackNavigation = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNavigation' component={TabNavigation} />
        <Stack.Screen name="RestorantDetail" component={RestorantDetailScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="ReservationsScreen" component={ReservationsScreen} />
      </Stack.Navigator>
    );
  };

  const AuthNavigation = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      </Stack.Navigator>)
  }

  const TabNavigation = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor='rgb(212, 123, 51)'
        barStyle={{ backgroundColor: 'rgb(242, 238, 220)' }}
      >
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="home" size={20} style={{ color: 'rgb(212, 123, 51)' }} />;
            },
          }}
        />
        <Tab.Screen
          name="Kupon"
          component={Coupon}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="ticket" size={20} style={{ color: 'rgb(212, 123, 51)' }} />;
            },
          }}
        />
        <Tab.Screen
          name="Keşfet"
          component={ExploreScreen}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="compass" size={25} style={{ color: 'rgb(212, 123, 51)' }} />;
            },
          }}
        />
        <Tab.Screen
          name="Rezervasyon"
          component={ReservationsScreen}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="calendar-check-o" size={20} style={{ color: 'rgb(212, 123, 51)' }} />;
            },
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfilesScreen}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="user" size={20} style={{ color: 'rgb(212, 123, 51)' }} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigation /> : <StackNavigation />}
    </NavigationContainer>
  )

}

export default Navigation;