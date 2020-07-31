import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdlagalistaOtpadaComponent } from './component/odlagalista-otpada/odlagalista-otpada.component';
import { MapComponent } from './component/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    OdlagalistaOtpadaComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
