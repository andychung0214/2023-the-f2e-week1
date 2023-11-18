import { CustomDialogService } from '../../../services/custom-dialog.service';
import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent {
  sponsorMoney: number= 600;
  selectedPayway: string = '信用卡支付'; // 預設選中 '信用卡支付'

  constructor(
    private customDialogService:CustomDialogService,
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    localStorage.setItem('account-login', '12345678');
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  openDialog(desc: string){
    this.dialogRef.close();
    this.customDialogService.openFinalDialog(desc);
  }

  selectPayway(payway: string) {
    this.selectedPayway = payway;
  }
}
