import { VrstaOtpadaEnum } from '../enums/VrstaOtpadaEnum'
import { Feature } from 'ol';

export class OdlagalisteOtpadaDTO {
  constructor() {}

  Id: number;
  Opis: string;
  Adresa: string;
  VrstaOtpada: VrstaOtpadaEnum;
  ProcijenjenaKolicina: number;
  VrijemeUocavanjaOtpada: Date;
  Lokacija: Feature;
}