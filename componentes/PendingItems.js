import { Text, View, StyleSheet, FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { useState } from 'react';

const todoList = [
  {
    id: 1,
    title: 'Pending 1',
    description: 'Dsc 1',
    category: 'Movie',
  },
  {
    id: 2,
    title: 'Pending 2',
    description: 'Dsc 2',
    category: 'Manga',
  },
  {
    id: 3,
    title: 'Pending 3',
    description: 'Dsc 3',
    category: 'Movie',
  },
  {
    id: 4,
    title: 'Pending 4',
    description: 'Dsc 1',
    category: 'Movie',
  },
  {
    id: 5,
    title: 'Pending 5',
    description: 'Dsc 2',
    category: 'Manga',
  },
  {
    id: 6,
    title: 'Pending 6',
    description: 'Dsc 3',
    category: 'Movie',
  },
  {
    id: 7,
    title: 'Pending 7',
    description: 'Dsc 1',
    category: 'Movie',
  },
  {
    id: 8,
    title: 'Pending 8',
    description: 'Dsc 2',
    category: 'Manga',
  },
  {
    id: 9,
    title: 'Pending 9',
    description: 'Dsc 3',
    category: 'Movie',
  },
  {
    id: 10,
    title: 'Pending 10',
    description: 'Dsc 1',
    category: 'Movie',
  },
  {
    id: 11,
    title: 'Pending 11',
    description: 'Dsc 2',
    category: 'Manga',
  },
  {
    id: 12,
    title: 'Pending 12',
    description: 'Dsc 3',
    category: 'Movie',
  },
];

const PendingItems = () => {
  const [todoItems, setTodoItems] = useState(todoList);

  const deleteItem = (id) => {
    const items = todoItems.filter((todo => id !== todo.id));
    setTimeout(() => {
      setTodoItems(items);
    }, 200);
  };

  return(
    <View style={styles.container}>
      <FlatList
        data={todoItems}
        keyExtractor={(todo) => todo.id}
        renderItem={({ item, index }) => <TodoItem todo={item} deleteItemFn={deleteItem} />}
        ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingBottom: 15,
    height: '86%',
  },
});

export default PendingItems;