import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { UserModel } from '../../models/user.model';
import { SessionService } from '../../services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private isLogInActive: boolean;
  private isTitleVisible: boolean;
  private signUpForm: FormGroup;
  private signInForm: FormGroup;

  constructor(
    private _formBuild: FormBuilder,
    private _user: UserService,
    private _session: SessionService,
    private _router: Router
  ) {
    this.isTitleVisible = true;
    this.isLogInActive = true;
  }

  ngOnInit() {
    this.signUpForm = this._formBuild.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass2: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signInForm = this._formBuild.group({
      user: ['', Validators.required],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //====================================================
  //  Basic methods.
  //====================================================

  private isPasswordsMatch() {
    let userData = this.signUpForm.value;

    return userData.pass === userData.pass2;
  }

  //====================================================
  //  Events.
  //====================================================

  private toggleActiveForm(flag) {
    if (this.isTitleVisible) {
      this.isTitleVisible = false;
      this.isLogInActive = flag;
    } else {
      this.isLogInActive = flag;
    }
  }

  private resetHome() {
    this.isTitleVisible = true;
    this.isLogInActive = true;
  }

  private onSaveUser() {
    const userData = this.signUpForm.value;

    this._user.addOne(new UserModel(userData.user, userData.email, userData.pass));
    this.signUpForm.reset();

    alert('User Registered.')
  }

  private onLogin() {
    const userData = this.signInForm.value;

    if (this._session.logIn(userData.user, userData.pass)) {
      alert('LogIn Successfull');
      this._router.navigate(['tasks']);
    } else {
      alert('The user and the password don\'t match.');
    }
  }

  //====================================================
  //  Getters.
  //====================================================

  private get rg_user() { return this.signUpForm.get('user'); }
  private get rg_email() { return this.signUpForm.get('email'); }
  private get rg_pass() { return this.signUpForm.get('pass'); }
  private get rg_pass2() { return this.signUpForm.get('pass2'); }

  private get lg_user() { return this.signInForm.get('user'); }
  private get lg_pass() { return this.signInForm.get('pass'); }
}
