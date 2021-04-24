import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { SharedModule } from '../shared/shared.module';


import { TechStackComponent } from './tech-stack/tech-stack.component';
import { HomepageComponent } from './homepage';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent , data: {animationState: 'Home'} }
]

@NgModule({
  declarations: [
    TechStackComponent,
    HomepageComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    ParticlesModule,
    SharedModule
  ],
  exports: [
    TechStackComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class HomepageModule { }
