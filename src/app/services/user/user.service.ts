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
      this.saveAtStorage();
    }
  }

  public getAll() {
    return localStorage.users ? JSON.parse(localStorage.users) : [];
  }

  //==========================================================
  // Local methods.
  //==========================================================

  private saveAtStorage() {
    localStorage.setItem('users', JSON.stringify(this.userList));
  }
}
