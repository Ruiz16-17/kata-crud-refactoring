package co.com.sofka.crud.entities;

import javax.persistence.*;

@Entity
@Table(name = "todo")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_todo")
    private Long id_todo;

    @Column(name = "name_todo")
    private String name_todo;

    @Column(name = "isCompleted_todo")
    private boolean isCompleted_todo;

    //@Column(name = "name_todo")
    //private String groupListId;

   // @ManyToOne(optional = false)
    //@JoinColumn(name = "todolist_id")
      //  private TodoList todolist_id;

    //public String getGroupListId() {
      //  return groupListId;
    //}

    //public void setGroupListId(String groupListId) {
      //  this.groupListId = groupListId;
    //}

    public Todo() {
    }


    public Todo(Long id_todo, String name_todo, boolean isCompleted_todo, TodoList todolistId) {
        this.id_todo = id_todo;
        this.name_todo = name_todo;
        this.isCompleted_todo = isCompleted_todo;
        //this.todolist_id = todolistId;
    }

    //public TodoList getTodolistId() {
      //  return todolist_id;
    //}

    //public void setTodolistId(TodoList todolistId) {
      //  this.todolist_id = todolistId;
    //}

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


}
