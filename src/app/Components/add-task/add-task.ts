import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddTaskService } from '../../Service/add-task-service';
import { Todo } from '../../model/Task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.html',
   styleUrl: './add-task.css',
})
export class AddTaskComponent {

  

  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: AddTaskService
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: [false],
      priority: ['Low', Validators.required]
    });
  }

  submitTodo() {
    if (this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }

    const todo = new Todo(
      this.todoForm.value.title,
      this.todoForm.value.description,
      this.todoForm.value.completed,
      this.todoForm.value.priority
    );

    this.taskService.addTask(todo);
    this.todoForm.reset({ completed: false, priority: 'Low' });
  }
}
