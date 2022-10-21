import { View, StyleSheet, FlatList, Dimensions, LayoutAnimation } from 'react-native';
import PendingItem from './PendingItem';
import { useRef } from 'react';
import Constants from 'expo-constants';

import { TodoActions } from '../hooks/todoReducer';

// const todoList = [
//   {
//     id: 1,
//     title: 'Pending 1',
//     description: 'Dsc 1',
//     category: 'Movie',
//   },
//   {
//     id: 2,
//     title: 'Pending 2',
//     description: 'Dsc 2',
//     category: 'Manga',
//   },
//   {
//     id: 3,
//     title: 'Pending 3',
//     description: 'Dsc 3',
//     category: 'Movie',
//   },
//   {
//     id: 4,
//     title: 'Pending 4',
//     description: 'Dsc 1',
//     category: 'Movie',
//   },
//   {
//     id: 5,
//     title: 'Pending 5',
//     description: 'Dsc 2',
//     category: 'Manga',
//   },
//   {
//     id: 6,
//     title: 'Pending 6',
//     description: 'Dsc 3',
//     category: 'Movie',
//   },
//   {
//     id: 7,
//     title: 'Pending 7',
//     description: 'Dsc 1',
//     category: 'Movie',
//   },
//   {
//     id: 8,
//     title: 'Pending 8',
//     description: 'Dsc 2',
//     category: 'Manga',
//   },
//   {
//     id: 9,
//     title: 'Pending 9',
//     description: 'Dsc 3',
//     category: 'Movie',
//   },
//   {
//     id: 10,
//     title: 'Pending 10',
//     description: 'Dsc 1',
//     category: 'Movie',
//   },
//   {
//     id: 11,
//     title: 'Pending 11',
//     description: 'Dsc 2',
//     category: 'Manga',
//   },
//   {
//     id: 12,
//     title: 'Pending 12',
//     description: 'Dsc 3',
//     category: 'Movie',
//   },
// ];

const layoutAnimationConfig = {
  duration: 100,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut, 
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

const PendingItems = ({ pendingItems, dispatch }) => {
  const listRef = useRef(null);

  const deleteItem = (id) => {
    setTimeout(() => {
      dispatch({
        type: TodoActions.DELETE,
        payload: { id: id },
      });
      LayoutAnimation.configureNext(layoutAnimationConfig);
    }, 100);
  };

  return(
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={pendingItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => { 
          return <PendingItem 
            parentRef={listRef} 
            pendingItem={item} 
            deleteItemFn={deleteItem} />
        }}
        ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        ListFooterComponent={() => <View style={{marginVertical: 8}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: Dimensions.get('window').height - Constants.statusBarHeight - 60 - 16,
  },
});

export default PendingItems;