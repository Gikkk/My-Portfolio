import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit{

  constructor( ) {}

  ngOnInit(): void {}

  // back to top function
  scrollToTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
  }

  // scrollToTop() {
  //   this.viewportScroller.scrollToPosition([0, 0])
  // }
}
