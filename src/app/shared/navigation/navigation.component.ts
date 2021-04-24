import { Component, ViewChild, ElementRef, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {fadeInAnimation} from '../helpers/fadeInAnimation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [fadeInAnimation]
})
export class NavigationComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private renderer: Renderer2, private translate: TranslateService){
    this.preventScroll = document;
  }

  preventScroll: Document
  active = false;
  langFlag = false;
  @ViewChild("navbar") navbar: ElementRef;
  @ViewChild("Eng") Eng: ElementRef;
  @ViewChild("Geo") Geo: ElementRef;

  // navigation - scroll back
  navbarScroll(){
    setTimeout(() => { window.scrollTo({top: 0, behavior: "smooth"}) }, 300)
  }

  // mobnav menu
  activeClass(){
    this.active = !this.active;
    if(this.active){
      this.renderer.setStyle(this.preventScroll.body, 'overflow', 'hidden');
    }else{
      this.renderer.setStyle(this.preventScroll.body, 'overflow', 'auto');
    }
  }

  // language change
  langChange(language: string): void {
    this.translate.use(language);
    if(language === 'ge'){
      this.renderer.addClass(this.Geo.nativeElement, "mobnav__btn--active");
      this.renderer.removeClass(this.Eng.nativeElement, "mobnav__btn--active");
    }else{
      this.renderer.removeClass(this.Geo.nativeElement, "mobnav__btn--active");
      this.renderer.addClass(this.Eng.nativeElement, "mobnav__btn--active");
    }
    this.langFlag = !this.langFlag;
  }

  ngOnInit() {}
}
