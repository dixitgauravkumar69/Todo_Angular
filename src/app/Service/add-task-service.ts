import { Injectable } from '@angular/core';
import { Todo } from '../model/Task.model';

@Injectable({
  providedIn: 'root',
})
export class AddTaskService {

  private storageKey = 'todo_tasks';
  private tasks: Todo[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  //  Load tasks on app start
  private loadFromLocalStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  //  Save tasks
  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  //  Add new task
  addTask(todo: Todo): void {
    this.tasks.push(todo);
    this.saveToLocalStorage();
  }

  //  Get all tasks
  getTasks(): Todo[] {
    return this.tasks;
  }

  //  Delete task
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  }

  //  Toggle status
  toggleStatus(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveToLocalStorage();
  }
}
