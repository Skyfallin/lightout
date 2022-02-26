import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { HomeScreen, FriendsScreen, LoginEmailScreen, SignupScreen } from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName = 'Home'
    >
      <Tab.Screen name='Friends' component={FriendsScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='LoginEmailScreen' component={LoginEmailScreen} />
      <Tab.Screen name='SignupScreen' component={SignupScreen} />
      

    </Tab.Navigator>
  );
};
