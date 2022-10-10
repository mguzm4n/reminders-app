import { Button,  TextInput, StyleSheet, Text, View } from 'react-native';
import { colors }  from './colors.js';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const PendingItemForm = ({ closeFormFn }) => {
  const [selectedCategory, setSelectedCategory] = useState('movie');

  return(
    <View style={styles.form}>

      <View style={styles.field}>
        <Text>Título del recordatorio</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.field}>
        <Text>Descripción del recordatorio</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.field}>
        <Text>Categoría</Text>
        <View  style={styles.input}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }>
            <Picker.Item label="Movie" value="movie" />
            <Picker.Item label="Quote" value="quote" />
            <Picker.Item label="Book" value="book" />
          </Picker>
        </View>
      </View>

      <View style={ styles.buttons.container }>
        <Button title="Añadir pendiente" />
        <Button color={ colors.pendingList.redDelete } title="Cerrar" onPress={closeFormFn} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    zIndex: 10,
    width: '90%',
    position: 'absolute',
    top: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
    formTxt: {

    },
  },
  field: {
    width: '100%', 
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  buttons: {
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
  },
})

export default PendingItemForm;