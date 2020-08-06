import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdlagalistaOtpadaComponent } from './component/odlagalista-otpada/odlagalista-otpada.component';
import { MapComponent } from './component/map/map.component';
import { OdlagalisteDisplayComponent } from './component/odlagaliste-display/odlagaliste-display.component';
import { ModalComponent } from './component/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OdlagalistaOtpadaComponent,
    MapComponent,
    OdlagalisteDisplayComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
