import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
