import { Injectable } from '@angular/core';
import { OdlagalisteOtpadaDTO } from '../model/OdlagalisteOtpadaDTO';
import { VrstaOtpadaEnum } from '../enums/VrstaOtpadaEnum';
import { Feature } from 'ol/index';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj.js';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  odlagalistaOtpadaDTOList: OdlagalisteOtpadaDTO[];

  constructor() { }

  loadOdlagalistaOtpada() {
    
    this.odlagalistaOtpadaDTOList = [

      {
        Id: 1,
        Opis: 'Odlagalište plastike u mjestu Sv. Ivan Zelina',
        Adresa: 'Biskupečka ulica 10',
        VrstaOtpada: VrstaOtpadaEnum.Plastika,
        ProcijenjenaKolicina: 20,
        VrijemeUocavanjaOtpada: new Date('2020-08-01'),
        Lokacija: new Feature(new Point(fromLonLat([16.240984, 45.958788])))
      },
      {
        Id: 2,
        Opis: 'Staklo na hrpi kod Zaboka',
        Adresa: 'Gajeva ulica 30',
        VrstaOtpada: VrstaOtpadaEnum.Staklo,
        ProcijenjenaKolicina: 10,
        VrijemeUocavanjaOtpada: new Date('2020-07-15'),
        Lokacija: new Feature(new Point(fromLonLat([15.905915, 46.026425])))
      },

      {
        Id: 3,
        Opis: 'Bio-otpad na kraju ulice u Vrgorcu',
        Adresa: 'Ul. Pčelinjak I 19, Vrgorac',
        VrstaOtpada: VrstaOtpadaEnum.Biootpad,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-06-12'),
        Lokacija: new Feature(new Point(fromLonLat([17.370003, 43.209293])))
      },
      {
        Id: 4,
        Opis: 'Nakupina starog papira u Osijeku',
        Adresa: 'Kninska ulica 2, Osijek',
        VrstaOtpada: VrstaOtpadaEnum.Papir,
        ProcijenjenaKolicina: 10,
        VrijemeUocavanjaOtpada: new Date('2020-06-07'),
        Lokacija: new Feature(new Point(fromLonLat([18.697355, 45.541094])))
      },
      {
        Id: 5,
        Opis: 'Staro željezo kod Biograda na Moru',
        Adresa: 'Biokovska ulica 9, Biograd na Moru',
        VrstaOtpada: VrstaOtpadaEnum.Zeljezo,
        ProcijenjenaKolicina: 20,
        VrijemeUocavanjaOtpada: new Date('2020-05-23'),
        Lokacija: new Feature(new Point(fromLonLat([15.462422, 43.935288])))
      },
      {
        Id: 6,
        Opis: 'Nezbrinuta plastika na kraju ulice u Slunju',
        Adresa: 'Prilaz Narti 11-1, Slunj',
        VrstaOtpada: VrstaOtpadaEnum.Plastika,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-04-15'),
        Lokacija: new Feature(new Point(fromLonLat([15.577904, 45.119592])))
      },
      {
        Id: 7,
        Opis: 'Hrpa plastike u mjestu kod Plitvica',
        Adresa: 'Mukinje 30, Plitvička Jezera',
        VrstaOtpada: VrstaOtpadaEnum.Plastika,
        ProcijenjenaKolicina: 15,
        VrijemeUocavanjaOtpada: new Date('2020-03-29'),
        Lokacija: new Feature(new Point(fromLonLat([15.628579, 44.873838])))
      },
      {
        Id: 8,
        Opis: 'Bio-otpad na kraju ulice Verudela u Puli',
        Adresa: 'Verudela, Pula',
        VrstaOtpada: VrstaOtpadaEnum.Biootpad,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-03-12'),
        Lokacija: new Feature(new Point(fromLonLat([13.836115, 44.842291])))
      },
      {
        Id: 9,
        Opis: 'Odlagalište bio-otpada na kraju ulice u Daruvaru',
        Adresa: 'Prvomajska ul. 9, Daruvar',
        VrstaOtpada: VrstaOtpadaEnum.Biootpad,
        ProcijenjenaKolicina: 10,
        VrijemeUocavanjaOtpada: new Date('2020-02-27'),
        Lokacija: new Feature(new Point(fromLonLat([17.212124, 45.596917])))
      },
      {
        Id: 10,
        Opis: 'Hrpa papira na kraju ulice u Splitu',
        Adresa: 'Ulica Antuna Mihanovića 6, Split',
        VrstaOtpada: VrstaOtpadaEnum.Papir,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-02-02'),
        Lokacija: new Feature(new Point(fromLonLat([16.424050, 43.505998])))
      },

      // new Feature(new Point(fromLonLat([17.00, 44.60]))),
      // new Feature(new Point(fromLonLat([17.00, 44.70]))),
      // new Feature(new Point(fromLonLat([17.00, 44.80]))),
      // new Feature(new Point(fromLonLat([17.00, 44.90])))
    ];

    return this.odlagalistaOtpadaDTOList;
  }

  deleteOdlagalisteOtpada(id: number) {
    this.odlagalistaOtpadaDTOList = this.odlagalistaOtpadaDTOList.filter(x => x.Id != id);
    return this.odlagalistaOtpadaDTOList;
  }
}
