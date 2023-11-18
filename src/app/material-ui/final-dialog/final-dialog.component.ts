import { Component, Inject } from '@angular/core';


import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-final-dialog',
  templateUrl: './final-dialog.component.html',
  styleUrls: ['./final-dialog.component.scss']
})
export class FinalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FinalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    localStorage.setItem('account-login', '12345678');
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
