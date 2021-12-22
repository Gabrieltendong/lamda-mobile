import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import DrawerNavigator from './drawerNavigator';
import AuthNavigator from './AuthStackNavigator';
import { HOMESTACK, AUTH } from '../constants/routeName';

const Stack = createStackNavigator();


export default function AppNavContainer() {

  const user = useSelector(state => state.userReducer.user);

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor = "transparent" barStyle = "dark-content" />
      <Stack.Navigator initialRouteName = {user.access? HOMESTACK: AUTH}>
        <Stack.Screen 
          name={AUTH}
          component={AuthNavigator} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name={HOMESTACK} 
          component={DrawerNavigator}
          options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}