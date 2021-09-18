package co.com.sofka.crud.controllers;

import co.com.sofka.crud.entities.TodoList;
import co.com.sofka.crud.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @GetMapping(value = "api/todosLists")
    public ResponseEntity<?> getAll(){
        try{

            return ResponseEntity.status(HttpStatus.OK).body(todoListService.findAll());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }

    @PostMapping(value = "api/todoList")
    public ResponseEntity<?> save(@RequestBody TodoList entity){
        try {

            return ResponseEntity.status(HttpStatus.OK).body(todoListService.save(entity));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }

    @DeleteMapping(value = "api/{id}/todoList")
    public ResponseEntity<?> delete(@PathVariable("id")Long id){
        try {

            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(todoListService.delete(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }

}
