import { Dimensions, Button, TextInput, Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useState} from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import { colors }  from './colors.js';

import PendingItems from './PendingItems';

const FloatingBtn = ({ onPress }) => {
  return(
    <View style={styles.pendingBtnContainer}>
      <TouchableOpacity onPress={onPress} title="+">
        <View style={styles.addPendingBtn}>
          <Text style={styles.addPendingBtnTxt}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
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

            <View style={styles.form.formField}>
              <Text>Título del recordatorio</Text>
              <TextInput style={styles.form.formInput} />
            </View>

            <View style={styles.form.formField}>
              <Text>Descripción del recordatorio</Text>
              <TextInput style={styles.form.formInput} />
            </View>

            <View style={[styles.form.formField, {marginBottom: 10}]}>
              <Text>Categoría</Text>
              <TextInput />
            </View>

            <Button title="Añadir pendiente" />
            <Button title="Cerrar" onPress={() => setIsFormVisible(false)} />
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
    zIndex: 10,
    width: '90%',
    position: 'absolute',
    top: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
    formField: {
      width: '100%', 
      alignItems: 'flex-start',
      marginBottom: 30,
    },
    formTxt:{

    },
    formInput: {
      width: '100%',
      paddingVertical: 10,
      borderBottomWidth: 1,
    },
  },
  pendingBtnContainer: {
    zIndex: 10,
    position: 'absolute',
    top: Dimensions.get('window').height - 250,
    right: 40,
  },
  addPendingBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pendingList.unselectedBtn,
    elevation: 2
  },
  addPendingBtnTxt: {
    fontSize: 35,
    color: colors.white
  }
});

export default PendingList;