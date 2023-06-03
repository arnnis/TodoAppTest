import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Todo} from '../types/Todo';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

interface Props {
  todo: Todo;
  onCheckboxChange(value: boolean): void;
  onRemove(): void
}

const TodoItem: FC<Props> = ({todo, onCheckboxChange, onRemove}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          todo.isDone && styles.lineThrough,
        ]}>
        {todo.text}
      </Text>
      <CheckBox
        disabled={false}
        value={todo.isDone}
        onValueChange={onCheckboxChange}
        tintColors={{true: '#026612', false: '#333'}}
        style={{marginLeft: 'auto', marginRight: 16}}
      />
      <Icon name="trash" color="#333" size={22} onPress={onRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '100%',
    paddingVertical: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  }
});

export default TodoItem;
