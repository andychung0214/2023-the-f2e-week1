import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private sharedService:SharedService){}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      // if (elementId === 'donateNow') {
      //   this.sharedService.displayDonate(true);
      // } else {
      //   this.sharedService.displayMain(true);
      // }

      this.sharedService.isDisplayMain = true;
      this.sharedService.isDisplayDonate = false;
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
