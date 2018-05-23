import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private _user: UserService
  ) { }

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

  logOut() {
    localStorage.setItem('activeUser', null);
  }

  private saveSession(user: UserModel) {
    if (user) {
      localStorage.setItem('activeUser', JSON.stringify(user));
    }
  }
}
