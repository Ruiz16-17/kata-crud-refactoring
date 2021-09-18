import React from 'react';
import FormTodo from './components/todo/FormTodo';
import ListTodo from './components/todo/ListTodo';
import FormTodoList from './components/todolist/FormTodoList';
import ListTodoList from './components/todolist/ListTodoList';
import { StoreProviderListTodo } from './components/todolist/storeListTodo';
import { StoreProvider } from './store';

function App() {
  return <>
  <StoreProvider>
    <h3>To-Do List</h3>
    <FormTodo />
    <ListTodo />
  </StoreProvider>
  <StoreProviderListTodo>
    <FormTodoList/>
    <ListTodoList />
  </StoreProviderListTodo>
  </>
}

export default App;