import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {MISSIONS, ACTUALITES, LAMDA_MONEY, DETAIL_FEED, PROFIL_ENTERPRISE, LAMDA_STORE, PROFIL} from '../constants/routeName';
import {MyTabs} from './bottomNavigator';
import Actualites from '../screens/Actualites/index';
import LamdaMoney from '../screens/LamdaMoney/index';
import DrawerContainer from '../components/DrawerContainer';
import DetailFeed from '../screens/DetailFeed';
import ProfilEnterprise from '../screens/ProfilEnterprise';
import LamdaStore from '../screens/LamdaStore';
import ProfileScreen from '../screens/Profile';
import SondageScreen from '../screens/Sondage/index';
import DetailSondageScreen from '../screens/DetailSondage';

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
      <Stack.Screen 
        name={PROFIL} 
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}

const SondageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Sandage"
        component={SondageScreen} 
        options={{title: 'Sondage'}}
      />
      <Stack.Screen 
        name='DetailSondage' 
        component={DetailSondageScreen}
        options={({ route }) => ({ 
          title: route?.params?.item?.titre, 
          headerTitleStyle: {
            textTransform: 'capitalize', 
            color: '#444'
          } 
        })}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle = {{width: '80%'}}
      drawerType = 'slide'
      drawerContent={({navigation}) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name="Feed" component={MyTabs} />
      <Drawer.Screen name="SondageStack" component={SondageStack} />
      <Drawer.Screen name={ACTUALITES} component={ActualiteStack} />
      <Drawer.Screen name={LAMDA_MONEY} component={LamdaMoney} />
      <Drawer.Screen name={LAMDA_STORE} component={LamdaStore} />
    </Drawer.Navigator>
  );
}