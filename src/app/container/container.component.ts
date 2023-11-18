import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  isDisplayMain = true;
  isDisplayDonate!:boolean;

  public screenWidth: any;
  public screenHeight: any;

  scrollName: any;

  constructor(public sharedService:SharedService){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.card', {
      rotationY: 180,
      duration: 1,
      scrollTrigger: {
        trigger: '.card',
        start: 'top center',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.fade-in', {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top center',
        toggleActions: 'play none none none'
      }
    });

    tl.to('.card', { rotationY: 180, duration: 1 })
      .from('.fade-in', { opacity: 0, duration: 1 }, '-=0.5');
  }
  clickToDonate(){
    // this.isDisplayDonate = true;
    // this.isDisplayMain = false;

    this.sharedService.displayDonate(true);
  }
}
