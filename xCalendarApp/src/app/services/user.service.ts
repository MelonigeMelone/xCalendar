import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [];
  }

  public addUser(userToAdd: User): void {
    this.users.push(userToAdd);
  }

  public removeUser(userToRemove: User): void {
    for (const user of this.users) {
      if (user === userToRemove) {
        this.users.splice(this.users.indexOf(user), 1);
      }
    }
  }
}
