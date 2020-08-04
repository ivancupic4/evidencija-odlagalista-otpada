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
  @Output() uredi = new EventEmitter();
  @Output() obrisi = new EventEmitter();

  constructor(private service: AppService) { }

  ngOnInit(): void {

  }

  openAddNewModal() {

  }

  onUrediEvent(id: number) {
    console.log("Uredi event fired with Id: " + id);
  }

  onObrisiEvent(id: number) {
    this.obrisi.emit(id);
  }
}
