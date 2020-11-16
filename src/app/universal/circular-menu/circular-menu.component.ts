import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss']
})
export class CircularMenuComponent implements OnInit {

  activeClass(){
    const menu = document.querySelector('.circular__menu');
    menu.classList.toggle('active');
  }

  ngOnInit(): void {
  }

}
