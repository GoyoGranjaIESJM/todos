import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Pepe';

  constructor() { 
    this.cambiarNombre("José")
  }
  
  cambiarNombre(name:string):void
  {
    this.name=name;
  }
}
