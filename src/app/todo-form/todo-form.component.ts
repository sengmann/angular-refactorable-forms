import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tcc-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() todoItem: Todo;
  @Output() formSubmit = new EventEmitter<Partial<Todo>>();

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.todoItem.name, Validators.required),
      assignedTo: new FormControl(this.todoItem.assignedTo),
      description: new FormControl(this.todoItem.description, Validators.minLength(10)),
      due: new FormControl(this.todoItem.due),
    });
  }

}
