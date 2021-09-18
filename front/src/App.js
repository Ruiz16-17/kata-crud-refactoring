  
import React, { useContext, useEffect, useRef, useState } from 'react';
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


    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
    
    fetch(HOST_API + "/" + request.id_todo + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
    fetch(HOST_API + "/todos")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list })
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

// const FormTodoList = () => {
//   const formRef = useRef(null);
//   const { dispatch, state: { todoList } } = useContext(Store);
//   const item = todoList.item;
//   const [state, setState] = useState(item);

//   const onAddTodoList = (event) => {
//     event.preventDefault();

//     const request = {
//       name_todolist: state.name_todolist,
//       id_todolist: null,
//     };


//     fetch(HOST_API + "/todoList", {
//       method: "POST",
//       body: JSON.stringify(request),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then((todoList) => {
//         dispatch({ type: "add-item", item: todoList });
//         setState({ name_todolist: "" });
//         formRef.current.reset();
//       });
//   }


//   return <form ref={formRef}>
//     <input
//       type="text"
//       name="name_todolist"
//       placeholder="¿Qué piensas hacer hoy TodoList?"
//       defaultValue={item.name_todolist}
//       onChange={(event) => {
//         setState({ ...state, name_todolist: event.target.value })
//       }}  ></input>
//     <button onClick={onAddTodoList}>Crear</button>
//   </form>
// }


// const ListTodoList = () => {
//   const { dispatch, state: { todoList } } = useContext(Store);
//   const currentList = todoList.list;
//   useEffect(() => {
//     fetch(HOST_API + "/todosLists")
//       .then(response => response.json())
//       .then((list) => {
//         dispatch({ type: "update-list", list })
//       })
//   }, [dispatch]);


//   const onDelete = (id_todolist) => {
//     fetch(HOST_API + "/" + id_todolist + "/todo", {
//       method: "DELETE"
//     }).then((list) => {
//       dispatch({ type: "delete-item", id_todolist })
//     })
//   };

//   return <div>
//     <table >
//       <thead>
//         <tr>
//           <td>ID</td>
//           <td>Lista</td>
//         </tr>
//       </thead>
//       <tbody>
//         {currentList.map((todoList) => {
//           return <tr key={todoList.id_todo}>
//             <td>{todoList.id_todolist}</td>
//             <td>{todoList.name_todolist}</td>
//             <td><button onClick={() => onDelete(todoList.id_todo)}>Eliminar</button></td>
//           </tr>
//         })}
//       </tbody>
//     </table>
//   </div>
// }

// function reducerTodoList(state, action) {
//   switch (action.type) {
//     case 'update-item':
//       const todoUpItem = state.todoList;
//       const listUpdateEdit = todoUpItem.list.map((item) => {
//         if (item.id_todolist === action.item.id_todolist) {
//           return action.item;
//         }
//         return item;
//       });
//       todoUpItem.list = listUpdateEdit;
//       todoUpItem.item = {};
//       return { ...state, todoList: todoUpItem }
//     case 'delete-item':
//       const todoUpDelete = state.todoList;
//       const listUpdate = todoUpDelete.list.filter((item) => {
//         return item.id_todolist !== action.id_todolist;
//       });
//       todoUpDelete.list = listUpdate;
//       return { ...state, todoList: todoUpDelete }
//     case 'update-list':
//       const todoUpList = state.todoList;
//       todoUpList.list = action.list;
//       return { ...state, todoList: todoUpList }
//     case 'edit-item':
//       const todoUpEdit = state.todoList;
//       todoUpEdit.item = action.item;
//       return { ...state, todoList: todoUpEdit }
//     case 'add-item':
//       const todoUp = state.todoList.list;
//       todoUp.push(action.item);
//       return { ...state, todoList: {list: todoUp, item: {}} }
//     default:
//       return state;
//   }
// }


//----------------------------------------------------------------------------------


function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;