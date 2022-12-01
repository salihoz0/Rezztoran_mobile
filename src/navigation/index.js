import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import RestorantDetailScreen from '../screens/RestorantDetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SearchedRestScreen from '../screens/SearchedRestScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import data from  '../../assets/Data/Restorant_data.json'

const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="RestorantDetail" component={RestorantDetailScreen} />
      <Stack.Screen name="SearchedRest" component={SearchedRestScreen} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabC>
        <Tab.Screen
          name="Anasayfa"
          component={NavigationStack}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="home" size={20} 
              />;
            },
          }}
        />
        <Tab.Screen
          name="Arayın"
          component={ExploreScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="search" size={20}
            />;
            },
            
          }}
        />
        <Tab.Screen
          name="Favoriler"
          component={NavigationStack}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="heart" size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Yorumlar"
          component={NavigationStack}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="comment" size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Profil"
          component={NavigationStack}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="user" size={20} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
