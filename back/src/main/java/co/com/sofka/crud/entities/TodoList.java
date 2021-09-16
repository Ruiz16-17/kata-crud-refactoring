package co.com.sofka.crud.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "todolist")
public class TodoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_todolist")
    private Long id_todolist;

    @Column(name = "name_todolist")
    private String name_todolist;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(
            name = "todolist_todo",
            joinColumns = @JoinColumn(name = "todolist_id"),
            inverseJoinColumns = @JoinColumn(name = "id_todo")
    )
    private List<Todo> todo = new ArrayList<Todo>();

    public TodoList() {
    }

    public TodoList(Long id_todolist, String name_todolist, List<Todo> todo) {
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

    public List<Todo> getTodo() {
        return todo;
    }

    public void setTodo(List<Todo> todo) {
        this.todo = todo;
    }
}
