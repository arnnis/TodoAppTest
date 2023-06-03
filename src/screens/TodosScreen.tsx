import {useCallback, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Todo} from '../types/Todo';
import TodoItem from '../components/TodoItem';

const TodosScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = useCallback(() => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), text: newTodo, isDone: false},
    ]);
  }, [newTodo, todos, setTodos]);

  const handleInputChange = useCallback(
    (text: string) => {
      setNewTodo(text);
    },
    [setNewTodo],
  );

  const handleChecboxChange = useCallback(
    (id: string, value: boolean) => {
      setTodos(todos =>
        todos.map(todo => (todo.id === id ? {...todo, isDone: value} : todo)),
      );
    },
    [setTodos],
  );

  const handleRemove = useCallback(
    (id: string) => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos, setTodos],
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your todo!"
          placeholderTextColor="#333"
          value={newTodo}
          onChangeText={handleInputChange}
          style={styles.input}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {todos.length > 0?  todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckboxChange={val => handleChecboxChange(todo.id, val)}
            onRemove={() => handleRemove(todo.id)}
          />
        )) : (
          <View style={styles.noTodoContainer}>
          <Text style={styles.noTodo}>No Todos!</Text>
          </View>

        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  inputContainer: {
    backgroundColor: '#ffffffcf',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 16,
    color: '#333',
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: 16,
  },
  noTodo: {
    color: '#333',
    fontSize: 17
  },
  noTodoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TodosScreen;
