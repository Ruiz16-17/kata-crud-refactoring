package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.TodoList;

public interface InterfazTodoListService {

    public Iterable<TodoList> list();

    public TodoList save(TodoList todoList);

    public void delete(Long id);

    public TodoList get(Long id);
}
