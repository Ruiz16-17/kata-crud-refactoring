package co.com.sofka.crud.repository;

import co.com.sofka.crud.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
