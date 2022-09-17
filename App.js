import { useReducer, useState } from 'react';
import { Button, TextInput, Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import { addItemTo } from './utils';
const MovieForm = () => {
  const [movieForm, setMovieForm] = useState({});

  const addNewItem = async () => {
    try {
      await addItemTo('movies', movieForm);
    } catch (error) {
      console.log(error);
    }
  };

  const onInputTextChange = (name, txt) => {
    setMovieForm({...movieForm, [name]: txt});
  };

  return(<View style={{width: '80%'}}>
    <Text style={{textAlign: 'left'}}>Nombre de la película</Text>
    <TextInput onChangeText={txt => onInputTextChange('name', txt)} placeholder="Movie-name" />

    <Text style={{textAlign: 'left'}}>Imagen para la película</Text>
    <TextInput onChangeText={txt => onInputTextChange('img', txt)} placeholder="Movie-img" />

    <Button onPress={addNewItem} title="Añadir" />
  </View>);
};

const Main = () => {
  return(<>
    <Text>Añadir nuevo recordatorio de película</Text>

    <MovieForm />
  </>);
};

const TopBar = () => {
  return(<View style={ {
    marginTop: Constants.statusBarHeight, 
    width: '100%',
    height: 60, 
    backgroundColor: 'rgb(34, 211, 238)'} }>
    <TouchableHighlight>
      <Feather name="menu" size={45} color="rgb(34, 121, 100)" style={{marginTop: 7, marginLeft: 7}} />
    </TouchableHighlight>
  </View>);
};

const SideMenu = () => {
  return(<View style={ {
    position: "absolute",
    top: Constants.statusBarHeight + 60,
    padding: 15,
    width: '50%',
    zIndex: 2,
    backgroundColor: 'rgb(34, 211, 238)'} }>
      <Text>Películas</Text>
      <Text>Quotes</Text>
      <Text>Música</Text>
  </View>);
};

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <SideMenu />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
