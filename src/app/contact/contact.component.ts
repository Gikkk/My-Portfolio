import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', "url(https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg)");
  }

  ngOnInit(): void {
  }

}
