import { Injectable } from '@angular/core';
import { Feature } from 'ol/index';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj.js';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  odlagalistaOtpada;

  constructor() { }

  loadOdlagalistaOtpada() {
    
    this.odlagalistaOtpada = [
      new Feature(new Point(fromLonLat([17.00, 44.50]))),
      new Feature(new Point(fromLonLat([17.00, 44.60]))),
      new Feature(new Point(fromLonLat([17.00, 44.70]))),
      new Feature(new Point(fromLonLat([17.00, 44.80]))),
      new Feature(new Point(fromLonLat([17.00, 44.90])))
    ];

    return this.odlagalistaOtpada;
  }
}
