import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {Todo} from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
export class TaskEditPageComponent implements OnInit {

  private todoForm;

  constructor(
      public formBuilder: FormBuilder,
      public todoService: TodoService,
      public router: Router) {

  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
        description: '',
        completed: '',
        priority: ''
      });
  }

    onSubmit() {
        this.todoService.create(
            this.todoForm.get('description').value,
            this.todoForm.get('priority').value,
            Boolean(this.todoForm.get('completed').value)
        );

        this.router.navigate(['/tasks']);
    }

}
