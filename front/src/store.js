import React, { createContext, useReducer } from "react";
import reducer from "./components/todo/reducer";

const initialState = {
    todo: { list: [], item: {} },
    todoList: { list: [] }
};
const Store = createContext(initialState);

// function reducer(state, action) {
//     switch (action.type) {
//         case 'update-item':
//             const todoUpItem = state.todo;
//             const listUpdateEdit = todoUpItem.list.map((item) => {
//                 if (item.id_todo === action.item.id_todo) {
//                     return action.item;
//                 }
//                 return item;
//             });
//             todoUpItem.list = listUpdateEdit;
//             todoUpItem.item = {};
//             return { ...state, todo: todoUpItem }
//         case 'delete-item':
//             const todoUpDelete = state.todo;
//             const listUpdate = todoUpDelete.list.filter((item) => {
//                 return item.id_todo !== action.id_todo;
//             });
//             todoUpDelete.list = listUpdate;
//             return { ...state, todo: todoUpDelete }
//         case 'update-list':
//             const todoUpList = state.todo;
//             todoUpList.list = action.list;
//             return { ...state, todo: todoUpList }
//         case 'edit-item':
//             const todoUpEdit = state.todo;
//             todoUpEdit.item = action.item;
//             return { ...state, todo: todoUpEdit }
//         case 'add-item':
//             const todoUp = state.todo.list;
//             todoUp.push(action.item);
//             return { ...state, todo: { list: todoUp, item: {} } }
//         default:
//             return state;
//     }
// }

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>

}

export default Store;