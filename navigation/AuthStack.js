import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  LoginPhoneScreen,
  SignupScreen,
  ForgotPasswordScreen,
  LoginEmailScreen,
} from "../screens";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginPhone"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginEmail" component={LoginEmailScreen} />
      <Stack.Screen name="LoginPhone" component={LoginPhoneScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
