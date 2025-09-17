import { Component, Input } from '@angular/core';
import { NewTask } from '../interfaces/new-task.model';
import { User } from '../interfaces/user.model';
import { DUMMY_TASKS } from './../dummy-tasks';
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
  public tasks = DUMMY_TASKS;

  get selecterUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onCreateNewTask(newTaskData: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user!.id,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.date,
    });
    this.isAddingTask = false;
  }
}
