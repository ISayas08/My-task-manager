import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() { }

  //==================================================
  // Events.
  //==================================================

  private onAlertDismiss() {
    this.dialogRef.close();
  }

  private oncomfirmDismiss(response: boolean) {
    this.dialogRef.close(response);
  }

}
