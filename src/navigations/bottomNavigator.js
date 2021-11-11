import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HOME, CHAT, COINSTART, NOTIFICATIONS, DISCUSSION, DRAWER} from '../constants/routeName';
import {CoinsStack, DiscussionsStack, HomeStack} from './stackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Chat from '../screens/Chat/index';

import Notifications from '../screens/Notifications/index';
import colors from '../assets/themes/colors';
import Discussions from '../screens/Discussions';
import MyDrawer from './drawerNavigator';

const Tab = createBottomTabNavigator();

export function MyTabs() {

  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';
    if (routeName === CHAT) {
      return false;
    }
  
    return true;
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary1
      }}
      lazy = {true}
    >
      <Tab.Screen 
        name={HOME} 
        component={HomeStack} 
          options={{
            unmountOnBlur: true,
            tabBarIcon: (({color, size})=> <Octicons name="home" size={size} color = {color} />)
          }}
        />

      <Tab.Screen 
        name={DISCUSSION} 
        component={DiscussionsStack} 
        options={({ route }) => ({
            tabBarIcon: (({color, size})=> <Ionicons name="chatbubble-outline" size={size} color = {color} />),
            tabBarVisible: getTabBarVisibility(route)
        })}
      />
      <Tab.Screen 
        name={COINSTART} 
        component={CoinsStack} 
        options={{
            unmountOnBlur: true,
            tabBarIcon: (({color, size})=> <Ionicons name="server" size={size} color = {color} />)
          }}
        />
      <Tab.Screen 
        name={NOTIFICATIONS} 
        component={Notifications} 
        options={{
            unmountOnBlur: true,
            tabBarIcon: (({color, size})=> <Ionicons name="notifications-outline" size={size} color = {color} />)
        }}
      />
      <Tab.Screen 
        name={DRAWER} 
        component={MyDrawer}
        options={{
            tabBarIcon: (({color, size}) => (
              <Feather 
                name="bar-chart-2" 
                size={size} 
                color = {color}
                style = {{
                  transform: [{rotate: "90deg", }]
                }} 
              />
            ))
        }}
        listeners = {({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer()
          }
        })}
      />
    </Tab.Navigator>
  );
}