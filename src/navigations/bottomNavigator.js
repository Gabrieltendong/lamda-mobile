import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HOME, CHAT, COINSTART, NOTIFICATIONS, DISCUSSION} from '../constants/routeName';
import {CoinsStack, DiscussionsStack, HomeStack} from './stackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chat from '../screens/Chat/index';

import Notifications from '../screens/Notifications/index';
import colors from '../assets/themes/colors';
import Discussions from '../screens/Discussions';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style:{
          backgroundColor: colors.secondary2.second,
          borderRadius: 50,
          marginHorizontal: 30,
          marginBottom: 10,
          height: 60
        }
      }}
      lazy = {true}
    >
      <Tab.Screen 
        name={HOME} 
        component={HomeStack} 
          options={{
            unmountOnBlur: true,
            tabBarIcon: (({})=> <Ionicons name="home" size={30} color={colors.white} />)
          }}
        />

      <Tab.Screen 
        name={DISCUSSION} 
        component={DiscussionsStack} 
        options={{
            tabBarIcon: (({})=> <Ionicons name="chatbox" size={30} color={colors.white} />)
          }}
      />
      <Tab.Screen 
        name={COINSTART} 
        component={CoinsStack} 
        options={{
            unmountOnBlur: true,
            tabBarIcon: (({})=> <Ionicons name="server" size={30} color={colors.white} />)
          }}
        />
      <Tab.Screen 
        name={NOTIFICATIONS} 
        component={Notifications} 
        options={{
            unmountOnBlur: true,
            tabBarIcon: (({})=> <Ionicons name="notifications" size={30} color={colors.white} />)
        }}
      />
    </Tab.Navigator>
  );
}