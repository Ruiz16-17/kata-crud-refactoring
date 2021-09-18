import React, { useContext, useEffect } from 'react';
import consumer from './consumer';
import Store from './storeListTodo';

export default () => {

    const { dispatch, state: { todoList } } = useContext(Store);
    const currentList = todoList.list;

    useEffect(() => {
        consumer.List()
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "update-list", list })
            })
    }, [dispatch]);


    const onDelete = (id_todoList) => {
        consumer.delete(id_todoList).then((list) => {
            dispatch({ type: "delete-item", id_todoList })
        })
    };

    return <div>
        <table >
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Categoría</td>
                </tr>
            </thead>
            <tbody>
                {currentList.map((todoList) => {
                    return <tr key={todoList.id_todolist}>
                        <td>{todoList.id_todolist}</td>
                        <td>{todoList.name_todolist}</td>
                        <td><button onClick={() => onDelete(todoList.id_todolist)}>Eliminar</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}
