package co.com.sofka.crud.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "todolist")
public class TodoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_todolist")
    private Long id;

    @Column(name = "name_todolist")
    private String name;

    @OneToMany(mappedBy = "todolist")
    private Collection<Todo> todos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
