import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProjectComponent } from './project.component';

const appRoutes: Routes = [
  { path: '', component: ProjectComponent , data: {animationState: 'Projects'} }
]

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    RouterModule.forChild(appRoutes),
    SharedModule,

  ],
  exports: []
})
export class ProjectModule { }
