import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'projects', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: "**" , redirectTo: "home"},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    // scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: "enabled"
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
