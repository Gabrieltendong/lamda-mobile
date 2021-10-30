import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {MISSIONS, ACTUALITES, LAMDA_MONEY, DETAIL_FEED, PROFIL_ENTERPRISE, LAMDA_STORE} from '../constants/routeName';
import {MyTabs} from './bottomNavigator';
import Missions from '../screens/Missions/index';
import Actualites from '../screens/Actualites/index';
import LamdaMoney from '../screens/LamdaMoney/index';
import DrawerContainer from '../components/DrawerContainer';
import DetailFeed from '../screens/DetailFeed';
import ProfilEnterprise from '../screens/ProfilEnterprise';
import LamdaStore from '../screens/LamdaStore';

const Stack = createStackNavigator();

const ActualiteStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Actu"
        component={Actualites} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name={DETAIL_FEED} 
        component={DetailFeed}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name={PROFIL_ENTERPRISE} 
        component={ProfilEnterprise}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name="Feed" component={MyTabs} />
      <Drawer.Screen name={MISSIONS} component={Missions} />
      <Drawer.Screen name={ACTUALITES} component={ActualiteStack} />
      <Drawer.Screen name={LAMDA_MONEY} component={LamdaMoney} />
      <Drawer.Screen name={LAMDA_STORE} component={LamdaStore} />
    </Drawer.Navigator>
  );
}