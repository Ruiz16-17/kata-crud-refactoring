package co.com.sofka.crud.controllers;

import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoList;
import co.com.sofka.crud.services.TodoListService;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {

    @Autowired
    private TodoListService service;

    @GetMapping(value = "api/todosLists")
    public Iterable<TodoList> list(){
        return service.list();
    }

    @PostMapping(value = "api/todoList")
    public TodoList save(@RequestBody TodoList todoList){
        return service.save(todoList);
    }

    @PutMapping(value = "api/todoList")
    public TodoList update(@RequestBody TodoList todoList){
        if(todoList.getId_todolist() != null){
            return service.save(todoList);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todoList")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

}
