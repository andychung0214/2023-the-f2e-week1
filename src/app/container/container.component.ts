import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  isDisplayMain = true;
  isDisplayDonate!:boolean;

  constructor(public sharedService:SharedService){}

  clickToDonate(){
    // this.isDisplayDonate = true;
    // this.isDisplayMain = false;

    this.sharedService.displayDonate(true);
  }
}
