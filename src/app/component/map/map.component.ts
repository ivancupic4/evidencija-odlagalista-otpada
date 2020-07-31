import { Component, OnInit } from '@angular/core';
// import Tile from 'ol/layer/Tile';
// import Imagelayer from 'ol/layer/Image';
// import TileJSON from 'ol/source/TileJSON';
import { fromLonLat } from 'ol/proj.js';
import { Circle, Fill, Icon, Style, Stroke } from 'ol/style';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Feature, Map, Overlay, View } from 'ol/index';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private service: MapService) { }

  map;
  vectorSource;
  vectorLayer;
  rasterLayer;

  odlagalistaOtpada;

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {

    this.odlagalistaOtpada = this.service.loadOdlagalistaOtpada();

    this.vectorSource = new VectorSource({
      features: this.odlagalistaOtpada
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: new Style({
        image: new Circle({
          radius: 7,
          fill: new Fill({color: 'red'}),
          stroke: new Stroke(),
        }),
      }),
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({source: new OSM()}),
        this.vectorLayer
      ],
      view: new View({
        center: fromLonLat([17.00, 44.50]),
        zoom: 7.3
      }),
    });
  }

}
