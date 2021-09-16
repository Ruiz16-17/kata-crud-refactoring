package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.Todo;

public interface InterfazTodoService {

    public Iterable<Todo> list();

    public Todo save(Todo todo);

    public void delete(Long id);

    public Todo get(Long id);
}
