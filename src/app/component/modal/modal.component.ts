import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OdlagalisteOtpadaDTO } from '../../model/OdlagalisteOtpadaDTO';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  constructor(private modalService: NgbModal) { }

  @Input() title;
  @Input() odlagalisteOtpadaDTO: OdlagalisteOtpadaDTO;

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    // .result.then((result) => {});
  }

}
