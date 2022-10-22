import { Dimensions, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useReducer, useState, useEffect} from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import { colors }  from './colors.js';

import PendingItems from './PendingItems';
import PendingItemForm from './PendingItemForm.js';
import { getDataFrom } from '../utils.js';
import { TodoActions, initialState, todoReducer } from '../hooks/todoReducer';

import { filterPendingsAtom } from '../atoms/filters';
import { useAtomValue } from 'jotai/utils';


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
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const filterOption = useAtomValue(filterPendingsAtom);
  const { gradientPrimary, gradientSecondary } = colors.pendingList;

  useEffect(() => {
    const getItems = async () => {
      const items = await getDataFrom('pendings');
      dispatch({
        type: TodoActions.SET,
        payload: items,
      });
    };
    getItems();
  }, []);

  const filterItems = () => {
    if(filterOption === 'All') return state.pendingItems;

    const cleanOption = filterOption
      .toLowerCase()
      .substring(0, filterOption.length - 1);

    return state
      .pendingItems
      .filter((item) => item.category === cleanOption);
  };

  const filteredItems = filterItems();

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
          <PendingItemForm closeFormFn={closeForm} dispatch={dispatch} />
        </PopUp>
        <PendingItems pendingItems={filteredItems} dispatch={dispatch} />
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