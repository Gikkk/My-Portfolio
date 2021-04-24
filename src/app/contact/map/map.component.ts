import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon, Style} from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('500ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({ opacity: 0}))
        ])
      ]
    )
  ],
})
export class MapComponent implements OnInit {

  @ViewChild("mapOverlay") mapOver: ElementRef;

  Telavi;
  map: Map;
  vectorSource: VectorSource;
  vectorLayer: VectorLayer;
  mapZoom =  false;
  mapOverlay = true;

  constructor( private renderer: Renderer2) { }

  // my location map
  initMap(){
    this.Telavi = new Feature({
      geometry: new Point(olProj.fromLonLat([45.496760 ,41.909998]))
    })

    this.Telavi.setStyle(new Style({
      image: new Icon(({
        color: '#129899',
        crossOrigin: 'anonymous',
        src: "assets/map/location.png",
      }))
    }))

    this.vectorSource = new VectorSource({
      features: [this.Telavi]
    })

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    })

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([45.496760 ,41.909998]),
        zoom: 12
      })
    });
  }

  // mouse wheel event - overlay
  onMouseWheel() {
    this.mapZoom = true;
    this.renderer.setStyle(this.mapOver.nativeElement, 'background-color', 'rgba(0, 0, 0, 0.3)');
  }

  // clear overlay on click
  onMouseClick(){
    this.mapZoom = false;
    this.mapOverlay = false;
  }

  ngOnInit(): void {
    this.initMap();
  }
}
