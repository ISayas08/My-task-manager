import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private _session: SessionService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  //=====================================================
  // Events.
  //=====================================================

  private logout() {
    this._session.logOut();
    this._router.navigate(['home']);
  }

}
