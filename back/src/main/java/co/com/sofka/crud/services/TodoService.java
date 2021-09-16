package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoList;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService implements InterfazBaseService<Todo>{

    @Autowired
    private TodoRepository todoRepository;


    @Override
    @Transactional
    public List<Todo> findAll() throws Exception {
        try{

            List<Todo> entities = todoRepository.findAll();
            return entities;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public Todo findById(Long id) throws Exception {
        try{

            Optional<Todo> entityOptional = todoRepository.findById(id);
            return entityOptional.get();
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public Todo save(Todo entity) throws Exception {
        try{
            entity = todoRepository.save(entity);
            return entity;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public Todo update(Long id, Todo entity) throws Exception {
        try{
            Optional<Todo> entityOptional = todoRepository.findById(id);
            Todo todo = entityOptional.get();
            todo = todoRepository.save(entity);
            return todo;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public boolean delete(Long id) throws Exception {
        try{

            if(!todoRepository.existsById(id)){
                throw new Exception();
            }

            todoRepository.deleteById(id);
            return true;
        }catch (Exception e){

            throw new Exception(e.getMessage());
        }
    }
}
