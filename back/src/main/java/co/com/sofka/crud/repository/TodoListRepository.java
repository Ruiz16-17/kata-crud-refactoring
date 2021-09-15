package co.com.sofka.crud.repository;

import co.com.sofka.crud.model.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoListRepository extends JpaRepository<TodoList, Long> {

}
