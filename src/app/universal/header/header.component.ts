import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public classApplied : boolean = false;

  toggleClass(){
    this.classApplied = !this.classApplied;
  }

  ngOnInit(): void {
  }

}
