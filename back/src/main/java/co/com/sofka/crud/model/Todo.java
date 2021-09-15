package co.com.sofka.crud.model;

import javax.persistence.*;

@Entity
@Table(name = "todo")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_todo")
    private Long id;

    @Column(name = "name_todo")
    private String name;

    @Column(name = "isCompleted_todo")
    private boolean completed;

    //@Column(name = "name_todo")
    //private String groupListId;

    @ManyToOne
    @JoinColumn(name = "id_todolist")
    private TodoList todolist;

    //public String getGroupListId() {
      //  return groupListId;
    //}

    //public void setGroupListId(String groupListId) {
      //  this.groupListId = groupListId;
    //}

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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
