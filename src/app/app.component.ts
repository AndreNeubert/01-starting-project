import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;
  public selectedUserName = '';

  onSelectUser(id: string) {
    const selectedUser = this.users.find((user) => user.id === id);
    this.selectedUserName = selectedUser ? selectedUser.name : '';
  }
}
