import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './componentes/Home';
import TopBar from './componentes/TopBar';
import PendingList from './componentes/PendingList';
import MoviesReminder from "./componentes/MoviesReminder";

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { colors } from './componentes/colors';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
          screenOptions={{
            header: ({ navigation, route, options }) => { return <TopBar navProps={ {navigation, route, options} } />},
            drawerStyle: { backgroundColor: colors.white, },
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Pendings" component={PendingList} />
          <Drawer.Screen name="Movies" component={MoviesReminder} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
