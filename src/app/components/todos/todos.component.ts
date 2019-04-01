import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo'
import { TodoService} from "../../services/todo.service";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(td => {
      this.todos=td;
    });
  }

  deleteTodo(todo:Todo) {
    console.log('delete me');
    // Remove From UI
    this.todos= this.todos.filter(t=>t.id!==todo.id);
    // Remove From Server
    this.todoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo=>{
      this.todos.push(todo);
    })
  }
}
 