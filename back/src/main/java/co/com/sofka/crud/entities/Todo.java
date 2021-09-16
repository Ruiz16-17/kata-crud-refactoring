package co.com.sofka.crud.entities;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.persistence.*;

@Entity
@Table(name = "todo")
@EnableJpaRepositories
@EnableJpaAuditing
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_todo")
    private Long id_todo;

    @Column(name = "name_todo")
    private String name_todo;

    @Column(name = "isCompleted_todo")
    private boolean isCompleted_todo;

    @Column(name = "todolist_id")
    private Long todolist_id;

    public Todo() {
    }

    public Todo(Long id_todo, String name_todo, boolean isCompleted_todo, Long todolist_id) {
        this.id_todo = id_todo;
        this.name_todo = name_todo;
        this.isCompleted_todo = isCompleted_todo;
        this.todolist_id = todolist_id;
    }

    public Long getId_todo() {
        return id_todo;
    }

    public void setId_todo(Long id_todo) {
        this.id_todo = id_todo;
    }

    public String getName_todo() {
        return name_todo;
    }

    public void setName_todo(String name_todo) {
        this.name_todo = name_todo;
    }

    public boolean isCompleted_todo() {
        return isCompleted_todo;
    }

    public void setCompleted_todo(boolean completed_todo) {
        isCompleted_todo = completed_todo;
    }

    public Long getTodolist_id() {
        return todolist_id;
    }

    public void setTodolist_id(Long todolist_id) {
        this.todolist_id = todolist_id;
    }
}
