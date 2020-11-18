import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss']
})
export class CircularMenuComponent implements OnInit {

  public active : boolean = false;

  activeClass(){
    this.active = !this.active;
  }

  ngOnInit(): void {
  }

}
