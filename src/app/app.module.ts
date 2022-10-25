import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { MiDirectivaEstructuralDirective } from './mi-directiva-estructural.directive';



@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    MiDirectivaDirective,
    MiDirectivaEstructuralDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
