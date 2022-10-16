import { Button, Text, Animated, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState, useRef } from 'react';

import { Feather, MaterialIcons } from '@expo/vector-icons';

import { colors } from './colors.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const CompleteBtn = () => {
  const unselectedBtnColor = colors.pendingList.unselectedBtn;

  const [bgColor, setBgColor] = useState(unselectedBtnColor);
 
  const toggleColor = () => {
    if(bgColor === unselectedBtnColor){
      setBgColor('green');
    }else{
      setBgColor(unselectedBtnColor);
    }
  };

  return(
    <TouchableOpacity onPress={toggleColor}>
      <View style={[styles.acceptBtn, { backgroundColor: bgColor }]}>
        { 
          bgColor === 'green' && 
          <View>
            <Feather name="check" size={35} color="white" style={ {marginTop: 3} }/>
          </View> 
        }
      </View>
    </TouchableOpacity>
  );
};


const OnTodoDelete = (progress, dragX) => {
  return(
    <View style={ styles.deleteContainer }>
      <Text style={ styles.deleteTxt }>you're deleting this item!</Text>
      <MaterialIcons 
        style={ { position: 'absolute', right: 25 } }
        name="delete" size={30} 
        color={ colors.pendingList.redDelete } />
    </View>
  )
};
// 
const TodoItem = ({ todo, deleteItemFn }) => {
  const transitionValue = useRef(new Animated.Value(8)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideIn = () => {
      Animated
        .timing(transitionValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      })
        .start();
      Animated
        .timing(opacityValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      })
        .start();
    };
    slideIn();
  }, []);

  return(
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableOpen={() => deleteItemFn(todo.id)}
        renderRightActions={OnTodoDelete}>
        <Animated.View style={[styles.container, {
            transform:  [ { translateY: transitionValue } ],
            opacity: opacityValue,
          } ]}>
          <View>
            <Text style={styles.title}>{todo.title}</Text>
            <Text>{todo.description}</Text>
            <Text>{todo.category}</Text>
          </View>
          <CompleteBtn />
        </Animated.View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.51,
  elevation: 2
}

const styles = StyleSheet.create({
  container: {
    width: '93%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 18,
    ...shadow,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
  },
  acceptBtn: {
    ...shadow,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteTxt: {
    color: colors.pendingList.redDelete,
  }
});

export default TodoItem;