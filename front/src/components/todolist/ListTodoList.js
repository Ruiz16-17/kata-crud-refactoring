import React, { useContext, useEffect } from 'react';
import { StoreProvider } from '../../store';
import FormTodo from '../todo/FormTodo';
import ListTodo from '../todo/ListTodo';
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


    const onDelete = (id_todolist) => {
        consumer.delete(id_todolist).then((list) => {
            dispatch({ type: "delete-item", id_todolist })
        })
    };

    return <div>

        {currentList.map((todoList) => {
            return <div key={todoList.id_todolist}>

                <fieldset>

                    <legend>
                        {todoList.name_todolist}
                        <button onClick={() => onDelete(todoList.id_todolist)}>Eliminar</button>

                        <StoreProvider>

                            <FormTodo />
                            <ListTodo idList={todoList.id_todolist} />
                        </StoreProvider>

                    </legend>

                </fieldset>

            </div>
        })}
    </div>
}
