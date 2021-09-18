package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.Todo;

import java.util.List;

public interface InterfazTodoService<E> {

    public List<E> findAll(Long idList) throws  Exception;
    public E findById(Long id) throws Exception;
    public E save(E entity) throws Exception;
    public E update(Long id, E entity) throws Exception;
    public boolean delete(Long id) throws Exception;
}
