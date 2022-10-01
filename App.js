import { useReducer, useState } from 'react';
import { Dimensions, Button, TextInput, Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import MoviesReminder from "./componentes/MoviesReminder";
import QuotesReminder from "./componentes/QuotesReminder";
import SongsReminder from "./componentes/MoviesReminder";

import StyledLink from "./componentes/StyledLink";

import { NativeRouter, Routes, Route, Link } from 'react-router-native';

import PendingList from './componentes/PendingList';

const TopBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const setMenuVisibility = () => setIsMenuVisible(!isMenuVisible);

  return(
    <View>
      <View style={ {
        marginTop: Constants.statusBarHeight,
        width: '100%',
        height: 60,
        backgroundColor: 'rgb(34, 211, 238)'} }>
        <TouchableHighlight onPress={setMenuVisibility}>
          <Feather name="menu" size={45} color="rgb(34, 121, 100)" style={{marginTop: 7, marginLeft: 7}} />
        </TouchableHighlight>
      </View>
      {isMenuVisible && <SideMenu setMenuVisibilityFn={setMenuVisibility} />}
    </View>
  );
};

const SideMenu = ( { setMenuVisibilityFn }) => {
  return(
    <View style={ {
    position: 'absolute',
    top: Constants.statusBarHeight + 60,
    padding: 15,
    width: '50%',
    height: Dimensions.get('window').height - 60,
    backgroundColor: 'rgb(34, 211, 238)'} }>

      <StyledLink to="/reminder/pending"
        title="Pending List"
        onPressFn={setMenuVisibilityFn}
        />

      <StyledLink to="/reminder/movies"
        title="Películas"
        onPressFn={setMenuVisibilityFn}
        />

      <StyledLink to="/reminder/quotes"
        title="Quotes"
        onPressFn={setMenuVisibilityFn}
        />

      <StyledLink to="/reminder/songs"
        title="Música"
        onPressFn={setMenuVisibilityFn}
        />

    </View>
  );
};

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <TopBar />
        <View style={ {zIndex: -1} }>
          <Routes>
            <Route path='/' element={<View><Text>Home</Text></View>} />
            <Route path='reminder/pending' element={<PendingList />} />
            <Route path='reminder/quotes' element={<QuotesReminder />} />
            <Route path='reminder/movies' element={<MoviesReminder />} />
            <Route path='reminder/songs' element={<SongsReminder />} />
          </Routes>
        </View>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
