import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';

import { HttpClientModule } from '@angular/common/http';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { DatosGeograficosComponent } from './datos-geograficos/datos-geograficos.component';
import { TraduccionesComponent } from './traducciones/traducciones.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { MiDirectivaEstructuralDirective } from './directivas/mi-directiva-estructural.directive';
import { PaisesInfoComponent } from './paises-info/paises-info.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    DatosGeneralesComponent,
    DatosGeograficosComponent,
    TraduccionesComponent,
    MiDirectivaDirective,
    MiDirectivaEstructuralDirective,
    PaisesInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
