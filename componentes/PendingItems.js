import { Text, View, StyleSheet } from 'react-native';
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
];

const PendingItems = () => {
  const [todoItems, setTodoItems] = useState(todoList);

  const deleteItem = (id) => {
    const items = todoItems.filter((todo => id !== todo.id));
    setTodoItems(items);
  };

  return(
    <View style={styles.container}>
      {todoItems.map( (todo, idx) => (
        <View 
          key={todo.id} 
          style={ [styles.cardContainer, {marginBottom: idx == todoList.length - 1 ? 0 : 10}] }>
          <TodoItem todo={todo} deleteItemFn={deleteItem} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
  },
  cardContainer: {
    width: "100%",
  }
});

export default PendingItems;