import { Dimensions, Button, TextInput, Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { useState} from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import { colors }  from './colors.js';

import PendingItems from './PendingItems';

const FloatingBtn = ({ onPress }) => {
  return(
    <Button onPress={onPress} title="+">

    </Button>
  ); 
};

const PopUp = ({ children, isVisible }) => {
  if(!isVisible) return;

  return(
    { ...children }
  );
};


const PendingList = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { gradientPrimary, gradientSecondary } = colors.pendingList;

  return(
    <LinearGradient 
      colors={[gradientPrimary, gradientSecondary]} 
      style={ {height: "100%"} }>

      <View style={styles.container}>
        <FloatingBtn onPress={() => setIsFormVisible(!isFormVisible)} />
        <PopUp isVisible={isFormVisible}>
          <View style={ styles.form }>

            <View style={{flexDirection: 'row'}}>
              <Text>Título del recordatorio</Text>
              <TextInput />
            </View>

            <Text>Descripción del recordatorio</Text>
            <TextInput />

            <Text style={{textAlign: 'left'}}>Categoría</Text>
            <TextInput />

            <Button title="Añadir pendiente" />
          </View>
        </PopUp>
        <PendingItems />
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '90%',
  },
});

export default PendingList;