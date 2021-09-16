package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoList;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {

    @Autowired
    private TodoListRepository repository;

    public Iterable<TodoList> list(){
        return repository.findAll();
    }

    public TodoList save(TodoList todoList){
        return repository.save(todoList);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoList get(Long id){
         return repository.findById(id).orElseThrow();
    }

}
