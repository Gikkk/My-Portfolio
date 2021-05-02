import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor( private title: Title, private meta: Meta ) {}

  myStyle: object = {};
  myParams: object = {};
  windowHeight: number;

  // particles details and screen resize event
  onResize(){
    this.windowHeight = window.innerHeight;
    this.myStyle = {
      'height': `${this.windowHeight}px`,
      'background': "transperent",
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      "particles": {
        "number": {
          "value": 70,
        },
        "color": {
          "value": "#73258C"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 2.5,
            "color": "#73258C"
          },
        },
        "opacity": {
          "value": 0.8,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 20,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 120,
          "color": "#fff",
          "opacity": 0.8,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
        },
        "modes": {
          "grab": {
            "distance": 150,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
  }

  // setting meta tags dynamically
  ngOnInit() {
    this.onResize();
    this.title.setTitle("Home - Angular Developer Portfolio");

    this.meta.updateTag({ name: 'og:title', content: 'Home - Developer portfolio' });
    this.meta.updateTag({ name: 'description', content: 'Home page of front end developer portfolio - for developing purposes' });
    this.meta.updateTag({ name: 'og:url', content: 'https://giorgi-portfolio.web.app/home' });

    this.meta.updateTag({ name: 'twitter:title', content: 'Home - Developer portfolio' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Home page of front end developer portfolio - for developing purposes' });
  }

}
