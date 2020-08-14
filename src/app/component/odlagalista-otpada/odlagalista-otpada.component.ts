import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../service/app.service';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';
import { FilterDTO } from '../../model/FilterDTO';

@Component({
  selector: 'app-odlagalista-otpada',
  templateUrl: './odlagalista-otpada.component.html',
  styleUrls: ['./odlagalista-otpada.component.css']
})
export class OdlagalistaOtpadaComponent implements OnInit {

  @Input() odlagalistaOtpadaDTOList: OdlagalisteOtpadaDTO[];
  @Output() urediOdlagaliste = new EventEmitter();
  @Output() obrisiOdlagaliste = new EventEmitter();
  @Output() dodajNovoOdlagaliste = new EventEmitter();
  @Output() filtrirajOdlagaliste = new EventEmitter();
  filterDTO: FilterDTO;
  vrijemeUocavanjaOtpadaDatumOd;
  vrijemeUocavanjaOtpadaDatumDo;

  constructor(private service: AppService) { }

  ngOnInit(): void {

  }

  onUrediEvent(odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO) {
    this.urediOdlagaliste.emit(odlagalisteOtpadaDTO);
  }

  onObrisiEvent(id: number) {
    this.obrisiOdlagaliste.emit(id);
  }

  onDodajNovoOdlagalisteEvent(odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO) {
    this.dodajNovoOdlagaliste.emit(odlagalisteOtpadaDTO);
  }

  filtriraj() {
    this.filterDTO = new FilterDTO();
    if (this.vrijemeUocavanjaOtpadaDatumOd != null) {
      this.filterDTO.VrijemeUocavanjaOtpadaDatumOd = new Date(this.vrijemeUocavanjaOtpadaDatumOd.year, this.vrijemeUocavanjaOtpadaDatumOd.month - 1, this.vrijemeUocavanjaOtpadaDatumOd.day);
    }
    if (this.vrijemeUocavanjaOtpadaDatumDo != null) {
      this.filterDTO.VrijemeUocavanjaOtpadaDatumDo = new Date(this.vrijemeUocavanjaOtpadaDatumDo.year, this.vrijemeUocavanjaOtpadaDatumDo.month - 1, this.vrijemeUocavanjaOtpadaDatumDo.day);
    }

    this.filtrirajOdlagaliste.emit(this.filterDTO);
  }

  ocisti() {
    this.vrijemeUocavanjaOtpadaDatumOd = null;
    this.vrijemeUocavanjaOtpadaDatumDo = null;

    this.filtriraj();
  }
}
