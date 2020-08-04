import { Component } from '@angular/core';
import { OdlagalisteOtpadaDTO } from './model/OdlagalisteOtpadaDTO';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odlagalistaOtpadaDTOList: OdlagalisteOtpadaDTO[];

  title = 'evidencija-odlagalista-otpada';

  constructor(private service: AppService) {
  }

  ngOnInit(): void {
    this.odlagalistaOtpadaDTOList = this.service.loadOdlagalistaOtpada();
  }

  obrisiOdlagaliste(id: number) {
    this.odlagalistaOtpadaDTOList = this.service.deleteOdlagalisteOtpada(id);
  }
}
