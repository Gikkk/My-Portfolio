import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // function classToggle() {
    //   var el = document.querySelector('.icon-cards__content');
    //   el.classList.toggle('step-animation');
    // }

    // document.querySelector('#toggle-animation').addEventListener('click', classToggle);
  }

}
