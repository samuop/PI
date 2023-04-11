import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LOGOArComponent } from './components/logoar/logoar.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LOGOArComponent,
    RedesSocialesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
