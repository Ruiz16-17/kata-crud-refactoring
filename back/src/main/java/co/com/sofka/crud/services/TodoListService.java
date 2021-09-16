package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoList;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class TodoListService implements InterfazBaseService<TodoList>{

    @Autowired
    private TodoListRepository todoListRepository;

    @Override
    @Transactional
    public List<TodoList> findAll() throws Exception {
        try{

            List<TodoList> entities = todoListRepository.findAll();
            return entities;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public TodoList findById(Long id) throws Exception {
        try{

            Optional<TodoList> entityOptional = todoListRepository.findById(id);
            return entityOptional.get();
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public TodoList save(TodoList entity) throws Exception {
        try{
            entity = todoListRepository.save(entity);
            return entity;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public TodoList update(Long id, TodoList entity) throws Exception {
        try{
            Optional<TodoList> entityOptional = todoListRepository.findById(id);
            TodoList todoList = entityOptional.get();
            todoList = todoListRepository.save(entity);
            return todoList;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public boolean delete(Long id) throws Exception {
        try{

            if(!todoListRepository.existsById(id)){
                throw new Exception();
            }

            todoListRepository.deleteById(id);
            return true;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }
}
