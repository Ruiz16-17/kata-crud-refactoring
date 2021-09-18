import React, { useContext, useRef, useState } from "react";
import consumer from "./consumer";
import Store from "./storeListTodo";

export default () => {
    const formRef = useRef(null);
    const { dispatch, state: { todoList } } = useContext(Store);
    const item = todoList.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();

        const request = {
            name_todolist: state.name_todolist,
            id_todolist: null,
        };


        consumer.save(request)
            .then(response => response.json())
            .then((todoList) => {
                dispatch({ type: "add-item", item: todoList });
                setState({ name_todolist: "" });
                formRef.current.reset();
            });
    }

    return <form ref={formRef}>
        <input
            type="text"
            name="name_List"
            placeholder="¿Qué piensas hacer hoy?"
            onChange={(event) => {
                setState({ ...state, name_todolist: event.target.value })
            }}  ></input>

        <button onClick={onAdd}>Crear</button>
    </form>

}