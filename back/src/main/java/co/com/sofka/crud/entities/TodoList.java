package co.com.sofka.crud.entities;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "todolist")
@EnableJpaRepositories
@EnableJpaAuditing
public class TodoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_todolist")
    private Long id_todolist;

    @Column(name = "name_todolist")
    private String name_todolist;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Todo> todo;

    public TodoList() {
    }

    public TodoList(Long id_todolist, String name_todolist, Set<Todo> todo) {
        this.id_todolist = id_todolist;
        this.name_todolist = name_todolist;
        this.todo = todo;
    }

    public Long getId_todolist() {
        return id_todolist;
    }

    public void setId_todolist(Long id_todolist) {
        this.id_todolist = id_todolist;
    }

    public String getName_todolist() {
        return name_todolist;
    }

    public void setName_todolist(String name_todolist) {
        this.name_todolist = name_todolist;
    }

    public Set<Todo> getTodo() {
        return todo;
    }

    public void setTodo(Set<Todo> todo) {
        this.todo = todo;
    }
}
