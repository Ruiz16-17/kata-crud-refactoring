  
import React, { useContext, useEffect, useRef, useState } from 'react';
import consumer from './components/todo/consumer';
import Store, { StoreProvider } from './store';

const HOST_API = "http://localhost:8080/api";

const Form = () => {
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name_todo: state.name_todo,
      id_todo: null,
      completed_todo: false
    };


    consumer.save(request)
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name_todo: state.name_todo,
      id_todo: item.id_todo,
      completed_todo: item.completed_todo
    };
    
    consumer.update(request)
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name_todo: "" });
        formRef.current.reset();
      });
  }

  return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="¿Qué piensas hacer hoy?"
      defaultValue={item.name_todo}
      onChange={(event) => {
        setState({ ...state, name_todo: event.target.value })
      }}  ></input>
    {item.id_todo && <button onClick={onEdit}>Actualizar</button>}
    {!item.id_todo && <button onClick={onAdd}>Crear</button>}
  </form>
}


const List = () => {

  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.list;

  useEffect(() => {
    consumer.List().then((response) => {
      response.json().then((list) => {
        dispatch({ type: "update-list", list });
      
    });
      })
  }, [dispatch]);


  const onDelete = (id_todo) => {
    fetch(HOST_API + "/" + id_todo + "/todo", {
      method: "DELETE"
    }).then((list) => {
      dispatch({ type: "delete-item", id_todo })
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo })
  };

  const onChange = (event, todo) => {
    const request = {
      name_todo: todo.name_todo,
      id_todo: todo.id_todo,
      completed_todo: event.target.checked
    };
    fetch(HOST_API + "/" + todo.id_todo + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
      });
  };

  const decorationDone = {
    textDecoration: 'line-through'
  };
  return <div>
    <table >
      <thead>
        <tr>
          <td>ID</td>
          <td>Tarea</td>
          <td>¿Completado?</td>
        </tr>
      </thead>
      <tbody>
        {currentList.map((todo) => {
          return <tr key={todo.id_todo} style={todo.completed_todo ? decorationDone : {}}>
            <td>{todo.id_todo}</td>
            <td>{todo.name_todo}</td>
            <td><input type="checkbox" defaultChecked={todo.completed_todo} onChange={(event) => onChange(event, todo)}></input></td>
            <td><button onClick={() => onDelete(todo.id_todo)}>Eliminar</button></td>
            <td><button onClick={() => onEdit(todo)}>Editar</button></td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

//----------------------------------------------------------------TodoList




//----------------------------------------------------------------------------------


function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;