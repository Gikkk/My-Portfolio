import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent} from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './contact/map/map.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { HeaderComponent } from './universal/header/header.component';
import { FooterComponent } from './universal/footer/footer.component';
import { CircularMenuComponent } from './universal/circular-menu/circular-menu.component';

const appRoutes:Routes = [
  {path: "", component: HomepageComponent},
  {path: "about", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "contact", component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HomepageComponent,
    MapComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    CircularMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
