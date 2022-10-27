import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { MiDirectivaEstructuralDirective } from './mi-directiva-estructural.directive';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { RouterModule } from '@angular/router';
import { rutas } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    MiDirectivaDirective,
    MiDirectivaEstructuralDirective,
    UnoComponent,
    DosComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
