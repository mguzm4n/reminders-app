import { Dimensions, Button, TextInput, Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useState} from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import { colors }  from './colors.js';

import PendingItems from './PendingItems';
import PendingItemForm from './PendingItemForm.js';

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

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return(
    <LinearGradient 
      colors={[gradientPrimary, gradientSecondary]} 
      style={ {height: "100%"} }>

      <View style={styles.container}>
        <FloatingBtn onPress={() => setIsFormVisible(true)} />
        <PopUp isVisible={isFormVisible}>
          <PendingItemForm closeFormFn={closeForm} />
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