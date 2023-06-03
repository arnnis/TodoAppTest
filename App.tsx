import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import TodosScreen from './src/screens/TodosScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TodosScreen />
    </SafeAreaView>
  );
}


export default App;
