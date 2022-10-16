import { Dimensions, Button, TextInput, Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect} from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import { colors }  from './colors.js';

import PendingItems from './PendingItems';
import PendingItemForm from './PendingItemForm.js';
import { getDataFrom } from '../utils.js';

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
  const [todoItems, setTodoItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { gradientPrimary, gradientSecondary } = colors.pendingList;

  useEffect(() => {
    const getItems = async () => {
      const items = await getDataFrom('pendings');
      console.log(items);
      setTodoItems(items);
    };
    getItems();
  }, []);

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const addNewItem = (todoItems) => {
    return (newItem) => {
      setTodoItems([...todoItems, newItem]);
    };
  };

  return(
    <LinearGradient 
      colors={[gradientPrimary, gradientSecondary]} 
      style={ {height: "100%"} }>

      <View style={styles.container}>
        <FloatingBtn onPress={() => setIsFormVisible(true)} />
        <PopUp isVisible={isFormVisible}>
          <PendingItemForm closeFormFn={closeForm} addNewItemFn={addNewItem(todoItems)} />
        </PopUp>
        <PendingItems todoItems={todoItems} setTodoItemsFn={setTodoItems} />
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