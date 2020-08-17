import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { fromLonLat } from 'ol/proj.js';
import { Circle, Fill, Style, Stroke } from 'ol/style';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Map, View } from 'ol/index';
import { OSM, Vector as VectorSource } from 'ol/source';
import { AppService } from '../../service/app.service';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';
import {ZoomToExtent, defaults as defaultControls} from 'ol/control';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {

  map: Map;
  vectorSource: VectorSource;
  vectorLayer: VectorLayer;
  rasterLayer;

  @Input() odlagalistaOtpadaDTOList: OdlagalisteOtpadaDTO[];
  @ViewChild('#popup') popupElement: ElementRef;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnChanges(changes: any) {
    if(!changes['odlagalistaOtpadaDTOList'].isFirstChange()) {
      this.map.dispose()
      this.initializeMap();
    }
  }

  initializeMap() {

    this.vectorSource = new VectorSource({
      features: this.odlagalistaOtpadaDTOList.map(x => x.Lokacija)
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
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            1753079,
            5745220,
            1813079,
            5755220 ],
        }) 
      ]),
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
