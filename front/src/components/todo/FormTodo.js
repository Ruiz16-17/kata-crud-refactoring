import React, { useContext, useRef, useState } from "react";
import Store from "../../store";
import consumer from "./consumer";

export default () => {

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