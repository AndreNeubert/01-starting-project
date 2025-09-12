import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  public tasks = DUMMY_TASKS;

  get selecterUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }
}
