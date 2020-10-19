import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public classApplied : boolean = false;

  toggleClass(){
    this.classApplied = !this.classApplied;

    const hamburger =  document.querySelector('.menu');
    hamburger.classList.toggle('opened');
  }

  activeClass(){
    const menu = document.querySelector('.circular__menu');
    menu.classList.toggle('active');
  }
}
