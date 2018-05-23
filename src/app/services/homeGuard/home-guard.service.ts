import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService {

  constructor(
    private _router: Router,
    private _session: SessionService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._session.getActiveUser()) {
      this._router.navigate(['tasks']);
      return false;
    }
    return true;
  }
}
