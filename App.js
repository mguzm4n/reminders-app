import { createDrawerNavigator } from '@react-navigation/drawer';

import { Provider } from 'jotai';

import Home from './componentes/Home';
import TopBar from './componentes/TopBar';
import PendingList from './componentes/PendingList';
import MoviesReminder from "./componentes/MoviesReminder";

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { colors } from './componentes/colors';
import { RouteMaps } from './routes';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Drawer.Navigator initialRouteName="Home"
          screenOptions={{
            header: ({ navigation, route, options }) => { return <TopBar navProps={ {navigation, route, options} } />},
            drawerStyle: { backgroundColor: colors.white, },
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name={RouteMaps.PendingListScreen} component={PendingList} />
          <Drawer.Screen name="Movies" component={MoviesReminder} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
