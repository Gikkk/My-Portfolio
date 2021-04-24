import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private title: Title, private meta: Meta) {
  }

  // setting meta tags dynam
  ngOnInit() {
    this.title.setTitle("About - Angular Developer Portfolio");

    this.meta.updateTag({ name: 'og:title', content: 'About - | Developer portfolio' });
    this.meta.updateTag({ name: 'description', content: 'About page of front end developer portfolio - personal info, CV' });
    this.meta.updateTag({ name: 'og:url', content: 'https://giorgi-portfolio.web.app/about' });

    this.meta.updateTag({ name: 'twitter:title', content: 'About - Developer portfolio' });
    this.meta.updateTag({ name: 'twitter:description', content: 'About page of front end developer portfolio - personal info, CV' });
  }
}
