import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';
import { Feature } from 'ol/index';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj.js';
import { AppService } from 'src/app/service/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  constructor(private modalService: NgbModal, private appService: AppService) { }

  @Input() title;
  @Input() odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO;
  @Output() dodajNovoOdlagaliste = new EventEmitter();
  @Output() urediOdlagaliste = new EventEmitter();
  lokacijaSirina;
  lokacijaDuzina;
  vrsteOtpadaList;
  vrijemeUocavanjaOtpada;

  ngOnInit(): void {
    if (this.odlagalisteOtpadaDTO == null) {
      this.resetForm();
    }

    this.vrsteOtpadaList = this.appService.loadVrsteOtpada();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // stvaranje objekta lokacije, sa upisanim koordinatama
      //this.odlagalisteOtpadaDTO.Lokacija = new Feature(new Point(fromLonLat([Number(this.lokacijaDuzina), Number(this.lokacijaSirina)])));
      this.odlagalisteOtpadaDTO.Lokacija = new Feature(new Point(fromLonLat([16.424050, 44.505998])));
      
      this.odlagalisteOtpadaDTO.VrijemeUocavanjaOtpada = new Date(this.vrijemeUocavanjaOtpada.year, this.vrijemeUocavanjaOtpada.month-1, this.vrijemeUocavanjaOtpada.day);

      console.log(this.odlagalisteOtpadaDTO.Id);

      if (this.odlagalisteOtpadaDTO.Id == null) {
        this.dodajNovoOdlagaliste.emit(this.odlagalisteOtpadaDTO);
      }
      else {
        this.urediOdlagaliste.emit(this.odlagalisteOtpadaDTO);
      }
      
      this.resetForm();
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      if (this.odlagalisteOtpadaDTO.Id == null) {
        this.resetForm();
      }
    });
  }

  resetForm() {
    this.odlagalisteOtpadaDTO = new OdlagalisteOtpadaDTO();
    this.vrijemeUocavanjaOtpada = null;
    this.lokacijaSirina = '';
    this.lokacijaDuzina = '';
  }

}
