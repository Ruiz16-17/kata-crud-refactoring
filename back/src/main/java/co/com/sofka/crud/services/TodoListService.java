package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.TodoList;
import co.com.sofka.crud.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TodoListService implements InterfazTodoListService<TodoList>{

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
