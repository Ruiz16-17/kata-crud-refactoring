package co.com.sofka.crud.controllers;

import co.com.sofka.crud.entities.TodoList;
import co.com.sofka.crud.services.TodoService;
import co.com.sofka.crud.entities.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping(value = "api/{idList}/todos")
    public ResponseEntity<?> getAll(@PathVariable Long idList){
        try{

            return ResponseEntity.status(HttpStatus.OK).body(todoService.findAll(idList));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }


    @PostMapping(value = "api/todo")
    public ResponseEntity<?> save(@RequestBody Todo entity){
        try {

            return ResponseEntity.status(HttpStatus.OK).body(todoService.save(entity));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }

    @PutMapping(value = "api/{id}/todo")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Todo entity){
        try {

            return ResponseEntity.status(HttpStatus.OK).body(todoService.update(id,entity));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }

    @DeleteMapping(value = "api/{id}/todo")
    public ResponseEntity<?> delete(@PathVariable("id")Long id){
        try {

            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(todoService.delete(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }

    @GetMapping(value = "api/{id}/todo")
    public ResponseEntity<?> getOne(@PathVariable Long id){
        try {

            return ResponseEntity.status(HttpStatus.OK).body(todoService.findById(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Error. Por favor intente de nuevo.\"}");
        }
    }



}
