import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SIGN_UP1, SIGN_UP2, START, ACTIVE_ACCOUNT, SIGN_IN, CHAT} from '../constants/routeName';
import Start from '../screens/Start/index';
import SignUp1 from '../screens/SignUp1/index';
import colors from '../assets/themes/colors';
import ActiveAccount from '../screens/ActiveAccount';
import SignIn from '../screens/SignIn';
import Chat from '../screens/Chat';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={START} 
        component={Start} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name={SIGN_UP1} 
        component={SignUp1} 
        options={{
          title: "Enregistrement",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
            fontWeight: 'bold'
          },
          headerStyle: {backgroundColor: colors.primary1},
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen 
        name={SIGN_IN} 
        component={SignIn} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name={ACTIVE_ACCOUNT}
        component={ActiveAccount} 
        options={{
          title: "Activation",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
            fontWeight: 'bold'
          },
          headerStyle: {backgroundColor: colors.primary1},
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen 
        name={CHAT}
        component={Chat} 
        options={{
          title: "Activation",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
            fontWeight: 'bold'
          },
          headerStyle: {backgroundColor: colors.primary1},
          headerTintColor: colors.white,
        }}
      />
    </Stack.Navigator>
  );
}