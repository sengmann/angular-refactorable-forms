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

  formModel: {[key in keyof Todo]?: FormControl} = {
    name: new FormControl(null, Validators.required),
    assignedTo: new FormControl(null),
    description: new FormControl(null, Validators.minLength(10)),
    due: new FormControl(null),
  };
  form: FormGroup = new FormGroup(this.formModel);

  constructor() { }

  ngOnInit() {
    this.form.patchValue(this.todoItem);
  }

}
