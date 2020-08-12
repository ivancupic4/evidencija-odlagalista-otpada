import { Feature } from 'ol';

export class OdlagalisteOtpadaDTO {
  constructor() {}

  Id: number;
  Opis: string;
  Adresa: string;
  VrstaOtpadaId: number;
  ProcijenjenaKolicina: number;
  VrijemeUocavanjaOtpada: Date;
  LokacijaSirina: number;
  LokacijaDuzina: number;
  Lokacija: Feature;
}