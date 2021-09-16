package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoListRepository extends JpaRepository<TodoList, Long> {

}
