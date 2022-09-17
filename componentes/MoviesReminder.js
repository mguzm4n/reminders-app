import { View, Text, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
const MoviesReminder = () => {
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

  return(
    <View style={{width: '80%'}}>
      <Text style={{textAlign: 'left'}}>Nombre de la película</Text>
      <TextInput onChangeText={txt => onInputTextChange('name', txt)} placeholder="Movie-name" />

      <Text style={{textAlign: 'left'}}>Imagen para la película</Text>
      <TextInput onChangeText={txt => onInputTextChange('img', txt)} placeholder="Movie-img" />

      <Button onPress={addNewItem} title="Añadir" />
    </View>
  );
};

export default MoviesReminder;