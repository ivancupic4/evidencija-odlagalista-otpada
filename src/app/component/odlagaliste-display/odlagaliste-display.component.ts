import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';

@Component({
  selector: 'app-odlagaliste-display',
  templateUrl: './odlagaliste-display.component.html',
  styleUrls: ['./odlagaliste-display.component.css']
})
export class OdlagalisteDisplayComponent implements OnInit {

  @Input() odlagaliste: OdlagalisteOtpadaDTO;
  @Output() uredi = new EventEmitter();
  @Output() obrisi = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onUrediClick(odlagaliste: OdlagalisteOtpadaDTO) {
    this.uredi.emit(odlagaliste);
  }

  onObrisiClick(id: number) {
    this.obrisi.emit(id);
  }
}
