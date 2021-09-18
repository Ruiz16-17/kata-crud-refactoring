package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.TodoList;

import java.util.List;
import java.util.Set;

public interface InterfazTodoListService<E> {

    public List<E> findAll() throws  Exception;
    public E save(E entity) throws Exception;
    public boolean delete(Long id) throws Exception;
}
