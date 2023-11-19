import { CustomDialogService } from '../../services/custom-dialog.service';
import { CustomDialogComponent } from './../material-ui/custom-dialog/custom-dialog.component';
import { SharedService } from './../../services/shared.service';
import { Component, ElementRef,ViewChild } from '@angular/core';

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
  loadingOpts: any;
  isDisplay = false;
  menu: any;
  menuClose: any;
  sideBar: any;
  mousemoveTimeline: any;
  scrollCover: any;
  scrollFace: any;
  // @ViewChild('bottomPart') bottomPart: ElementRef;

  constructor(public sharedService:SharedService,
    private customDialogService:CustomDialogService){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    gsap.registerPlugin(ScrollTrigger);

    // this.scrollCover = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".card", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    //     markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    //     pin: true,
    //     scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    //   },
    // });
    // this.scrollFace = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".fade-in", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    //     markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    //     pin: true,
    //     scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    //   },
    // });


    // gsap.to('.card', {
    //   rotationY: 180,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: '.card',
    //     start: 'top center',
    //     toggleActions: 'play none none none'
    //   }
    // });

    // gsap.from('.fade-in', {
    //   opacity: 0,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: '.fade-in',
    //     start: 'top 80%',
    //     toggleActions: 'play none none none'
    //   }
    // });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.container',
    //     start: 'top center',
    //     toggleActions: 'play none none none'
    //   }
    // });

    // tl.to('.card', { rotationY: 180, duration: 1 })
    //   .from('.fade-in', { opacity: 0, duration: 1 }, '-=0.5');


    //   this.mousemoveTimeline.to(".mousemove", { y: 15, duration: 1 })
    // this.mousemoveTimeline.to(".mousemove", { y: 0, duration: 1 });

    // this.scrollCover.to(".cover-top", { yPercent: -30 })
    // this.scrollCover.to(".pic-face", { yPercent: -70 })
    // this.scrollCover.to(".cover-mouse", { autoAlpha: 0, ease: "expo" }, "<")
    // this.scrollCover.to(".cover-right", { yPercent: 100 }, "<")
    // this.scrollCover.to(".cover-left", { yPercent: 10 }, "<")
    // this.scrollCover.to(".cover-top", { yPercent: -100 }, "<")
    // this.scrollCover.to(".cover-left", { yPercent: 100 })
    // this.scrollCover.to(".fade-in", { yPercent: -110 }, "<")
    // this.scrollCover.to(".pic-task", { opacity: 1, ease: "expo" })
    // this.scrollCover.to(".mouse", { opacity: 1, ease: "expo" }, "<");
  }
  clickToDonate(){
    // this.isDisplayDonate = true;
    // this.isDisplayMain = false;

    this.sharedService.displayDonate(true);
    setTimeout(() => this.scrollToBottomPart(), 0);
  }

  openDialog(desc: string){
    this.customDialogService.openDialog(desc);
  }

  scrollToBottomPart() {
    const element = document.getElementById('container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
