import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user.model';
import { TasksService } from '../services/tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  isAddingTask = false;
  constructor(private tasksService: TasksService) {}

  get selecterUserTasks() {
    return this.tasksService.getUserTasks(this.user!.id);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
