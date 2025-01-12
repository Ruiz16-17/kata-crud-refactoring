import React, { createContext, useReducer } from "react";
import reducer from "./reducer";


const initialState = {
    todoList: { list: [] }
};
const Store = createContext(initialState);

export const StoreProviderListTodo = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>

}

export default Store;