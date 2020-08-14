import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../service/app.service';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';

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
}
