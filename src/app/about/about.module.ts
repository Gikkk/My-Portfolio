import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { FocusComponent } from './focus/focus.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent , data: {animationState: 'About'} }
]

@NgModule({
  declarations: [
    FocusComponent,
    CardComponent,
    AboutComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    SharedModule
  ],
  exports: []
})
export class AboutModule { }
