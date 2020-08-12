import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';

@Component({
  selector: 'app-odlagaliste-display',
  templateUrl: './odlagaliste-display.component.html',
  styleUrls: ['./odlagaliste-display.component.css']
})
export class OdlagalisteDisplayComponent implements OnInit {

  @Input() odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO;
  @Output() uredi = new EventEmitter();
  @Output() obrisi = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onUrediClick(odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO) {
    this.uredi.emit(odlagalisteOtpadaDTO);
  }

  onObrisiClick(id: number) {
    this.obrisi.emit(id);
  }
}
