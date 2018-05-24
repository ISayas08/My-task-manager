import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private editUserForm: FormGroup;

  constructor(
    private buildForm: FormBuilder
  ) { }

  ngOnInit() {
    this.editUserForm = this.buildForm.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass2: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  //==========================================================
  // Local methods.
  //==========================================================

  private isPasswordsMatch() {
    let userData = this.editUserForm.value;

    return userData.pass === userData.pass2;
  }

  //==========================================================
  // Getters.
  //==========================================================

  private get user() { return this.editUserForm.get('user'); }
  private get email() { return this.editUserForm.get('email'); }
  private get pass() { return this.editUserForm.get('pass'); }
  private get pass2() { return this.editUserForm.get('pass2'); }

}
