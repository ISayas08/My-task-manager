import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { UserModel } from '../../models/user.model';
import { TasksService } from '../tasks/tasks.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private _user: UserService
  ) { }

  //==========================================================
  // Shared methods.
  //==========================================================

  public logIn(user: string, pass: string): boolean {
    const users = this._user.getAll();

    const usersFound: UserModel[] = users.filter(u => {
      return u.user.toLowerCase() === user.toLocaleLowerCase() && u.password === pass.toLocaleLowerCase();
    });

    if (usersFound.length) {
      this.saveSession(usersFound[0]);
      return true;
    }

    return false;
  }

  public logOut() {
    localStorage.removeItem('activeUser');
  }

  public getActiveUser(): UserModel | null {
    return localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null;
  }

  public upDateSessionData(user: UserModel) {
    this.saveSession(user);
  }

  //==========================================================
  // Local methods.
  //==========================================================

  private saveSession(user: UserModel) {
    if (user) {
      localStorage.setItem('activeUser', JSON.stringify(user));
    }
  }
}
