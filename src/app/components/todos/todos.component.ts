import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos=[
      {id:1,title:'Todo uno',completed:false},
      {id:2,title:'Todo dos',completed:true},
      {id:3,title:'Todo tres',completed:false}
    ];
  }
}
