import { useRef, useState, useEffect } from 'react';
import { Dimensions, Animated, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';


import MoviesReminder from "./componentes/MoviesReminder";
import QuotesReminder from "./componentes/QuotesReminder";
import SongsReminder from "./componentes/MoviesReminder";

import StyledLink from "./componentes/StyledLink";

import { NativeRouter, Routes, Route } from 'react-router-native';

import PendingList from './componentes/PendingList';

const TopBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const width = Math.round(Dimensions.get('window').width);
  const progressValue = useRef(new Animated.Value(-1*width)).current;

  const slideIn = () => {
    Animated.timing(progressValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    progressValue.setValue(0);
    Animated.timing(progressValue, {
      toValue: -1*width,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const toggleMenu = () => {
    if(!isMenuVisible){
      setIsMenuVisible(true);
      slideIn();
    }else{
      slideOut();
      setTimeout(() => setIsMenuVisible(false), 150);
    }
  }

  return(
    <View>
      <View style={ {
        marginTop: Constants.statusBarHeight,
        width: '100%',
        height: 60,
        backgroundColor: 'rgb(34, 211, 238)'} }>
        <TouchableOpacity style={ {width: 60} } onPress={toggleMenu}>
          <Feather name="menu" size={45} color="rgb(34, 121, 100)" style={{marginTop: 7, marginLeft: 7}} />
        </TouchableOpacity>
      </View>
      {isMenuVisible && <SideMenu 
        toggleMenuFn={toggleMenu}
        progressAnimationValue={progressValue} />}
    </View>
  );
};

const SideMenu = ( { toggleMenuFn, progressAnimationValue }) => {

  return(
    <Animated.View style={{
    position: 'absolute',
    top: Constants.statusBarHeight + 60,
    padding: 15,
    width: '50%',
    height: Dimensions.get('window').height - 60,
    backgroundColor: 'rgb(34, 211, 238)',
    transform: [{ translateX: progressAnimationValue }]}
    }>

      <StyledLink to="/reminder/pending"
        title="Pending List"
        onPressFn={toggleMenuFn}
        />

      <StyledLink to="/reminder/movies"
        title="Películas"
        onPressFn={toggleMenuFn}
        />

      <StyledLink to="/reminder/quotes"
        title="Quotes"
        onPressFn={toggleMenuFn}
        />

      <StyledLink to="/reminder/songs"
        title="Música"
        onPressFn={toggleMenuFn}
        />

    </Animated.View>
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
