import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: UserModel[];

  constructor() {
    this.userList = this.getAll() || [];
  }

  //==========================================================
  // Shared methods.
  //==========================================================

  public addOne(newUser: UserModel) {
    if (newUser) {
      this.userList.push(newUser);
      this.saveInStorage();
    }
  }

  public editOne(user: UserModel) {

    this.userList.filter(u => u.id === user.id)
      .forEach(u => {
        u.user = user.user,
          u.email = user.email,
          u.password = user.password,
          u.tasks = user.tasks
      });

    this.saveInStorage();
  }

  public getAll() {
    return localStorage.users ? JSON.parse(localStorage.users) : [];
  }

  //==========================================================
  // Local methods.
  //==========================================================

  private saveInStorage(userList = this.userList) {
    localStorage.setItem('users', JSON.stringify(userList));
  }
}
