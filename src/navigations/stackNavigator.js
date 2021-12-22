import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HOME, CHAT, NOTIFICATIONS, COINS, LAMDA_MONEY, ACTUALITES, HOTSPOT, DISCUSSION, PROFIL} from '../constants/routeName';


import Coins from '../screens/Coins/index';
import LamdaMoney from '../screens/LamdaMoney/index';
import Actualites from '../screens/Actualites/index';
import colors from '../assets/themes/colors';
import Home from '../screens/Home';
import Hotspot from '../screens/Hotspot/index';
import Discussions from '../screens/Discussions';
import Chat from '../screens/Chat';
import ProfileScreen from '../screens/Profile';

const Stack = createStackNavigator();


export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={HOME}
        component={Home} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name={HOTSPOT} 
        component={Hotspot}
      />
      <Stack.Screen 
        name={PROFIL} 
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}

export function DiscussionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Messenger'
        component={Discussions} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name={CHAT} 
        component={Chat}
        options = {{headerShown: false}}
      />
    </Stack.Navigator>
  );
}


export function CoinsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={COINS} 
        component={Coins} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name={LAMDA_MONEY} 
        component={LamdaMoney} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name={ACTUALITES} 
        component={Actualites} 
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}