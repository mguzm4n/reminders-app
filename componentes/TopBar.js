import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';

import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { colors, fontSizes } from './colors';

const TopBar = ({ navProps }) => {
  const { navigation, options, route } = navProps;

  const title = getHeaderTitle(options, route.name);

  const toggleSideMenu = () => {
    navigation.toggleDrawer();
  };

  return(
    <View style={ styles.bar }>
      <TouchableOpacity style={{ width: 60 }} onPress={toggleSideMenu}>
        <Feather name="menu" size={45} color={ colors.black } style={ styles.hamburger } />
      </TouchableOpacity>
      <Text style={ styles.title }>{ title }</Text>
    </View>
  );
};

const topMargin = 7;
const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    height: 60 + Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
  hamburger: {
    marginTop: topMargin, 
    marginLeft: 7,
  },
  title: {
    fontSize: fontSizes.topBar,
    alignSelf: 'flex-end',
    marginLeft: 20,
    marginBottom: fontSizes.topBar,
  }
});

export default TopBar;