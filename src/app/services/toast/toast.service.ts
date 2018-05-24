import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private _tolTip: MatSnackBar
  ) { }

  public showMessage(message: string, textButton: string = 'Ok', duration: number = 3000) {
    this._tolTip.open(message, textButton, { duration: duration });
  }
}
