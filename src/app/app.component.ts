import { Component, OnInit } from '@angular/core';
import { Todo } from './Dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form-blog';
  todo: Todo = null;

  constructor() {
  }

  ngOnInit(): void {
    this.todo = {
      assignedTo: 'bob@thecodecampus.de',
      name: 'write blog entry',
      description: 'Write a blog entry for refactorings among angular forms.',
      due: "2019-03-28",
      uuid: "791908b4-516a-11e9-8647-d663bd873d93"
    }
  }


}
