import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact.component';

const appRoutes: Routes = [
  { path: '', component: ContactComponent , data: {animationState: 'Contact'} }
]

@NgModule({
  declarations: [
    MapComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class ContactModule { }
