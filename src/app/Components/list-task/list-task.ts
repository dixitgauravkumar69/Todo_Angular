import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskService } from '../../Service/add-task-service';
import { Todo } from '../../model/Task.model';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-task.html',
  styleUrls: ['./list-task.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Todo[] = [];

  constructor(private taskService: AddTaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
    this.tasks = this.taskService.getTasks();
  }

  toggleStatus(index: number): void {
    this.taskService.toggleStatus(index);
    this.tasks = this.taskService.getTasks();
  }
}
