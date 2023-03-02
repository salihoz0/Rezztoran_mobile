import React from 'react';
import {ImageBackground} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import RestorantDetailScreen from '../screens/RestorantDetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SearchedRestScreen from '../screens/SearchedRestScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import ProfilesScreen from '../screens/ProfilesScreen/Profiles';
import ReservationsScreen from '../screens/ResevervationsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {useSelector} from 'react-redux'
import bg from '../../assets/images/arkaplan.png'


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
const {isLoggedIn} = useSelector((state) => state.authStore)
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='TabNavigation' component={TabNavigation}/>
      <Stack.Screen name="RestorantDetail" component={RestorantDetailScreen} />
      <Stack.Screen name="SearchedRest" component={SearchedRestScreen} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen name="ReservationsScreen" component={ReservationsScreen} />
    </Stack.Navigator>
  );
};

const AuthNavigation = () => {
  return(
  <Stack.Navigator screenOptions={{headerShown: false}}>
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
        activeColor="#3e2465"
        barStyle={{ backgroundColor: '#DBDBDB'}}
      >
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="home" size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Ara"
          component={ExploreScreen}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="search" size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Favoriler"
          component={FavoritesScreen}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="heart" size={20} />;
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
              return <Icon name="calendar-check-o" size={20} />;
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
              return <Icon name="user" size={20} />;
            },
          }}
        />
      </Tab.Navigator>
  );
};

return(
  <NavigationContainer>
    {!isLoggedIn ? <AuthNavigation/> : <StackNavigation/> } 
  </NavigationContainer>
)

}

export default Navigation;