import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> =new EventEmitter();
  
  constructor(private todoService:TodoService) { }
  ngOnInit() {
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete' : this.todo.completed
    }
    return classes;
  }
  onToggle(todo) {
    // Toggle in UI 
    todo.completed=!todo.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(todo)
      .subscribe(td => console.log(todo));
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
