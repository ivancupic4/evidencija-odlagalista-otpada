import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdlagalistaOtpadaComponent } from './odlagalista-otpada/odlagalista-otpada.component';
import { GisMapComponent } from './gis-map/gis-map.component';

@NgModule({
  declarations: [
    AppComponent,
    OdlagalistaOtpadaComponent,
    GisMapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
