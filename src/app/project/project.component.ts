import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor( private title: Title, private meta: Meta ) {}

  // setting meta tags dynamically
  ngOnInit() {
    this.title.setTitle("Projects - Angular Developer Portfolio");

    this.meta.updateTag({ name: 'og:title', content: 'Project - Developer portfolio' });
    this.meta.updateTag({ name: 'description', content: 'Project page of front end developer portfolio - projects list' });
    this.meta.updateTag({ name: 'og:url', content: 'https://giorgi-portfolio.web.app/project' });

    this.meta.updateTag({ name: 'twitter:title', content: 'Project - Developer portfolio' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Project page of front end developer portfolio - projects list' });
  }

}
