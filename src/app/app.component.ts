import { Component, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routeTransitionAnimations } from './shared/helpers/route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit{

  // route animation
  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }

  // multi language
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {}
}
