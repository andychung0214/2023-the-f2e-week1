import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showNavMenu: boolean = false;

  constructor(public sharedService:SharedService){}

  scrollToElement(elementId: string): void {

    this.sharedService.isDisplayMain = true;
    this.sharedService.isDisplayDonate = false;
    const element = document.getElementById(elementId);

    if (element) {
      // if (elementId === 'donateNow') {
      //   this.sharedService.displayDonate(true);
      // } else {
      //   this.sharedService.displayMain(true);
      // }

      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleNavMenu() {
    this.showNavMenu = !this.showNavMenu;
  }

  closeNavMenu() {
    this.showNavMenu = false;
  }

}
