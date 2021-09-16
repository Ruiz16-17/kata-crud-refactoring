package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.TodoList;
import org.springframework.data.repository.CrudRepository;

public interface TodoListRepository extends CrudRepository<TodoList, Long> {

}
