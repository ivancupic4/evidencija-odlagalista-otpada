import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { fromLonLat, toLonLat } from 'ol/proj.js';
import { Circle, Fill, Icon, Style, Stroke } from 'ol/style';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Feature, Map, Overlay, View } from 'ol/index';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { AppService } from '../../service/app.service';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';
import { toStringHDMS } from 'ol/coordinate';
import Select from 'ol/interaction/Select';
import {altKeyOnly, click, pointerMove} from 'ol/events/condition';
import OverlayPositioning from 'ol/OverlayPositioning';
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
      console.log("ngOnChanges map");
    }
  }

  initializeMap() {

    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    var overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

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
      overlays: [overlay],
    });

    this.map.on('singleclick', function (evt) {
      var coordinate = evt.coordinate;
      var hdms = toStringHDMS(toLonLat(coordinate));
    
      content.innerHTML = '<p>Odabrane koordinate su:</p><code>' + hdms + '</code>';
      overlay.setPosition(coordinate);
    });

  }
}
