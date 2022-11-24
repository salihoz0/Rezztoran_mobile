import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import LandingScreen from "../screens/LandingScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../screens/DrawerContent/Drawercontent";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Anasayfa"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Anasayfa" component={NavigationStack} />

        <Drawer.Screen name="Restorantlar" component={SignInScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
