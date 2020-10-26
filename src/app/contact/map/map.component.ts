import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  map: L.Map;

  ngAfterViewInit(): void {

    this.map = L.map('map').setView([41.909998, 45.496760], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    const marker = L.marker([41.909998, 45.496760]).addTo(this.map);
    marker.bindPopup("<b>Here I am!</b>").openPopup();
  }
}
