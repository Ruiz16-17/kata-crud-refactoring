import React from 'react';
import FormTodoList from './components/todolist/FormTodoList';
import ListTodoList from './components/todolist/ListTodoList';
import { StoreProviderListTodo } from './components/todolist/storeListTodo';

function App() {
  return <>
  <h1>To-Do List</h1>
  <StoreProviderListTodo>
    <FormTodoList/>
    <ListTodoList />
  </StoreProviderListTodo>
  </>
}

export default App;