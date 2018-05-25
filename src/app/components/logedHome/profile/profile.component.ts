import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../services/session/session.service';
import { UserModel } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private editUserForm: FormGroup;

  constructor(
    private buildForm: FormBuilder,
    private _session: SessionService,
    private _user: UserService,
    private _toas: ToastService
  ) { }

  ngOnInit() {
    this.editUserForm = this.buildForm.group({
      id: [''],
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass2: ['', [Validators.required, Validators.minLength(6)]],
      tasks: ['']
    });

    this.setUpForm();
  }

  //==========================================================
  // Local methods.
  //==========================================================

  private setUpForm() {
    let userData: UserModel = this._session.getActiveUser();

    this.editUserForm.setValue({
      id: userData.id,
      tasks: userData.tasks,
      user: userData.user,
      email: userData.email,
      pass: userData.password,
      pass2: userData.password
    });
  }

  private isPasswordsMatch() {
    let userData = this.editUserForm.value;

    return userData.pass === userData.pass2;
  }

  //==========================================================
  // Events.
  //==========================================================

  private onUpdateUserData() {
    const userDataToUpdate = this.editUserForm.value;
    const userObjUpdated = new UserModel(
      userDataToUpdate.id,
      userDataToUpdate.user,
      userDataToUpdate.email,
      userDataToUpdate.pass,
      userDataToUpdate.tasks
    );
    
    this._user.editOne(userObjUpdated);
    this._session.upDateSessionData(userObjUpdated);
    this._toas.showMessage('User updated successfully.')
  }

  //==========================================================
  // Getters.
  //==========================================================

  private get user() { return this.editUserForm.get('user'); }
  private get email() { return this.editUserForm.get('email'); }
  private get pass() { return this.editUserForm.get('pass'); }
  private get pass2() { return this.editUserForm.get('pass2'); }

}
