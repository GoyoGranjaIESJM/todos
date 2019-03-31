import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
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
    this.todoService.toggleCompleted(todo).subscribe(td => td=todo);
  }
  onDelete(todo) {
    console.log('borrar');
  }
}
