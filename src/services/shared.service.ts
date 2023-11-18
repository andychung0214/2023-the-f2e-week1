import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isDisplayMain: boolean = true;
  isDisplayDonate: boolean = false;

  constructor() { }

  displayMain(value: boolean) {
    this.isDisplayMain = value;
    this.isDisplayDonate = !value;
  }

  displayDonate(value: boolean) {
    this.isDisplayDonate = value;
    this.isDisplayMain = !value;
  }
}
