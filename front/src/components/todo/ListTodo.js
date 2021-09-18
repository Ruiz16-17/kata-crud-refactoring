import React, { useContext, useEffect } from "react";
import Store from "../../store";
import consumer from "./consumer";

export default ({idList}) => {

    const { dispatch, state: { todo } } = useContext(Store);
    const currentList = todo.list;

    useEffect(() => {
        consumer.List(idList).then((response) => {
            response.json().then((list) => {
                dispatch({ type: "update-list", list });

            });
        })
    }, [dispatch, idList]);


    const onDelete = (id_todo) => {

        consumer.delete(id_todo).then((list) => {
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

        consumer.update(request)
            .then(response => response.json())
            .then((todo) => {
                dispatch({ type: "update-item", item: todo });
            });
    };

    const decorationDone = {
        textDecoration: 'line-through'
    };

    return <div>
        <table>
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