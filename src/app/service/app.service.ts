import { Injectable } from '@angular/core';
import { OdlagalisteOtpadaDTO } from '../model/OdlagalisteOtpadaDTO';
import { VrstaOtpadaDTO } from '../model/VrstaOtpadaDTO';
import { VrstaOtpadaEnum } from '../enums/VrstaOtpadaEnum';
import { Feature } from 'ol/index';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj.js';
import { FilterDTO } from '../model/FilterDTO';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  odlagalistaOtpadaDTOList: OdlagalisteOtpadaDTO[];
  vrstaOtpadaDTOList: VrstaOtpadaDTO[];

  constructor() { }

  loadOdlagalistaOtpada() {
    
    this.odlagalistaOtpadaDTOList = [

      {
        Id: 1,
        Opis: 'Odlagalište plastike u mjestu Sv. Ivan Zelina',
        Adresa: 'Biskupečka ulica 10',
        VrstaOtpadaId: VrstaOtpadaEnum.Plastika,
        ProcijenjenaKolicina: 20,
        VrijemeUocavanjaOtpada: new Date('2020-08-01'),
        Lokacija: new Feature(new Point(fromLonLat([16.240984, 45.958788]))),
        LokacijaDuzina: 16.240984,
        LokacijaSirina: 45.958788
      },
      {
        Id: 2,
        Opis: 'Staklo na hrpi kod Zaboka',
        Adresa: 'Gajeva ulica 30',
        VrstaOtpadaId: VrstaOtpadaEnum.Staklo,
        ProcijenjenaKolicina: 10,
        VrijemeUocavanjaOtpada: new Date('2020-07-15'),
        Lokacija: new Feature(new Point(fromLonLat([15.905915, 46.026425]))),
        LokacijaDuzina: 15.905915,
        LokacijaSirina: 46.026425
      },

      {
        Id: 3,
        Opis: 'Bio-otpad na kraju ulice u Vrgorcu',
        Adresa: 'Ul. Pčelinjak I 19, Vrgorac',
        VrstaOtpadaId: VrstaOtpadaEnum.Biootpad,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-06-12'),
        Lokacija: new Feature(new Point(fromLonLat([17.370003, 43.209293]))),
        LokacijaDuzina: 17.370003,
        LokacijaSirina: 43.209293
      },
      {
        Id: 4,
        Opis: 'Nakupina starog papira u Osijeku',
        Adresa: 'Kninska ulica 2, Osijek',
        VrstaOtpadaId: VrstaOtpadaEnum.Papir,
        ProcijenjenaKolicina: 10,
        VrijemeUocavanjaOtpada: new Date('2020-06-07'),
        Lokacija: new Feature(new Point(fromLonLat([18.697355, 45.541094]))),
        LokacijaDuzina: 18.697355,
        LokacijaSirina: 45.541094
      },
      {
        Id: 5,
        Opis: 'Staro željezo kod Biograda na Moru',
        Adresa: 'Biokovska ulica 9, Biograd na Moru',
        VrstaOtpadaId: VrstaOtpadaEnum.Zeljezo,
        ProcijenjenaKolicina: 20,
        VrijemeUocavanjaOtpada: new Date('2020-05-23'),
        Lokacija: new Feature(new Point(fromLonLat([15.462422, 43.935288]))),
        LokacijaDuzina: 15.462422,
        LokacijaSirina: 43.935288
      },
      {
        Id: 6,
        Opis: 'Nezbrinuta plastika na kraju ulice u Slunju',
        Adresa: 'Prilaz Narti 11-1, Slunj',
        VrstaOtpadaId: VrstaOtpadaEnum.Plastika,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-04-15'),
        Lokacija: new Feature(new Point(fromLonLat([15.577904, 45.119592]))),
        LokacijaDuzina: 15.577904,
        LokacijaSirina: 45.119592
      },
      {
        Id: 7,
        Opis: 'Hrpa plastike u mjestu kod Plitvica',
        Adresa: 'Mukinje 30, Plitvička Jezera',
        VrstaOtpadaId: VrstaOtpadaEnum.Plastika,
        ProcijenjenaKolicina: 15,
        VrijemeUocavanjaOtpada: new Date('2020-03-29'),
        Lokacija: new Feature(new Point(fromLonLat([15.628579, 44.873838]))),
        LokacijaDuzina: 15.628579,
        LokacijaSirina: 44.873838
      },
      {
        Id: 8,
        Opis: 'Bio-otpad na kraju ulice Verudela u Puli',
        Adresa: 'Verudela, Pula',
        VrstaOtpadaId: VrstaOtpadaEnum.Biootpad,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-03-12'),
        Lokacija: new Feature(new Point(fromLonLat([13.836115, 44.842291]))),
        LokacijaDuzina: 13.836115,
        LokacijaSirina: 44.842291
      },
      {
        Id: 9,
        Opis: 'Odlagalište bio-otpada na kraju ulice u Daruvaru',
        Adresa: 'Prvomajska ul. 9, Daruvar',
        VrstaOtpadaId: VrstaOtpadaEnum.Biootpad,
        ProcijenjenaKolicina: 10,
        VrijemeUocavanjaOtpada: new Date('2020-02-27'),
        Lokacija: new Feature(new Point(fromLonLat([17.212124, 45.596917]))),
        LokacijaDuzina: 17.212124,
        LokacijaSirina: 45.596917
      },
      {
        Id: 10,
        Opis: 'Hrpa papira na kraju ulice u Splitu',
        Adresa: 'Ulica Antuna Mihanovića 6, Split',
        VrstaOtpadaId: VrstaOtpadaEnum.Papir,
        ProcijenjenaKolicina: 5,
        VrijemeUocavanjaOtpada: new Date('2020-02-02'),
        Lokacija: new Feature(new Point(fromLonLat([16.424050, 43.505998]))),
        LokacijaDuzina: 16.424050,
        LokacijaSirina: 43.505998
      },

    ];

    return this.sortByDate(this.odlagalistaOtpadaDTOList);
  }

  loadVrsteOtpada () {
    this.vrstaOtpadaDTOList = [
      { Id: 1, Naziv: "Staklo" },
      { Id: 2, Naziv: "Željezo" },
      { Id: 3, Naziv: "Papir" },
      { Id: 4, Naziv: "Plastika" },
      { Id: 5, Naziv: "Bio-otpad" },
    ];

    return this.vrstaOtpadaDTOList;
  }

  deleteOdlagalisteOtpada(id: number) {
    this.odlagalistaOtpadaDTOList = this.odlagalistaOtpadaDTOList.filter(x => x.Id != id);
    return this.sortByDate(this.odlagalistaOtpadaDTOList);
  }

  saveNewOdlagalisteOtpada(odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO) {
    // ovo služi za detektiranje koji broj je zadnji u popisu
    let lastId = Math.max.apply(Math, this.odlagalistaOtpadaDTOList.map(function(x) { return x.Id; }))
    odlagalisteOtpadaDTO.Id = lastId + 1;

    // dodavanje novog objekta u listu
    this.odlagalistaOtpadaDTOList.push(odlagalisteOtpadaDTO);

    // provjera da taj je dodani stvarno zadnji, ujedno i da ga ngOnChanges uspije detektirati da se promijenio
    this.odlagalistaOtpadaDTOList = this.odlagalistaOtpadaDTOList.filter(x => x.Id <= odlagalisteOtpadaDTO.Id);

    return this.sortByDate(this.odlagalistaOtpadaDTOList);
  }

  editOdlagalisteOtpada(odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO) {
    this.odlagalistaOtpadaDTOList.filter(x => x.Id == odlagalisteOtpadaDTO.Id)[0] = odlagalisteOtpadaDTO;

    // da ga ngOnChanges uspije detektirati da se promijenio
    this.odlagalistaOtpadaDTOList = this.odlagalistaOtpadaDTOList.filter(x => x.Id > 0);

    return this.odlagalistaOtpadaDTOList;
  }

  filterOdlagalisteOtpada(filterDTO: FilterDTO) {
    return this.odlagalistaOtpadaDTOList.filter(x => (filterDTO.VrijemeUocavanjaOtpadaDatumOd == null || x.VrijemeUocavanjaOtpada > filterDTO.VrijemeUocavanjaOtpadaDatumOd)
                                                  && (filterDTO.VrijemeUocavanjaOtpadaDatumDo == null || x.VrijemeUocavanjaOtpada < filterDTO.VrijemeUocavanjaOtpadaDatumDo));
  }

  sortByDate(odlagalistaOtpadaDTOList: OdlagalisteOtpadaDTO[]) {
    odlagalistaOtpadaDTOList.sort(function(a, b) {
      if (a.VrijemeUocavanjaOtpada < b.VrijemeUocavanjaOtpada)
        return 1;
      if (a.VrijemeUocavanjaOtpada > b.VrijemeUocavanjaOtpada)
        return -1;
      return 0;
    });

    return odlagalistaOtpadaDTOList;
  }
}
