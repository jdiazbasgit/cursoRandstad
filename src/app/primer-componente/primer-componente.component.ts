import { Component, Input, OnInit } from '@angular/core';

import { PaisesService } from '../servicios/paises.service';
import { Valores } from '../interfaces';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css'],
})
export class PrimerComponenteComponent implements OnInit {
  @Input('pais') dato: string | undefined;
  texto: string = 'federico';
  nombreCorto: string = '';
  nombreLargo: string = '';
  capital: string = '';
  valorParaIf: boolean = false;
  fronteras: Array<string> = [];
  regiones: Array<string> = ['europe', 'asia', 'africa', 'americas', 'oceania'];
  paises: Array<string> = [];
  continente: string;
  valores: Array<Valores> = [];
  valor: number = 2;
  constructor(private service: PaisesService) {
    this.continente = '0';
  }

  ngOnChanges() {
    if (this.dato != '0') {
      this.service
        .getDatos(`https://restcountries.com/v3.1/name/${this.dato}`)
        .subscribe((response: any) => {
          alert(response[0].name.official);
        });
    }
  }

  ngOnInit(): void {
    let valor1: Valores = { id: 1, texto: 'valor1' };
    let valor2: Valores = { id: 2, texto: 'valor2' };
    let valor3: Valores = { id: 3, texto: 'valor3' };

    this.service
      .getDatos('https://restcountries.com/v3.1/name/spain')
      .subscribe((response: any) => {
        console.log('llamada con httpClient:' + response[0].name.common);
        this.nombreCorto = response[0].name.common;
      });

    this.service
      .getDatosFetch('https://restcountries.com/v3.1/name/spain')
      .then((datos: any) => {
        console.log('llamada con fetch:' + datos[0].name.official);
        this.nombreLargo = datos[0].name.official;
      })
      .catch((error: any) => {
        console.log(error);
      });

    this.service
      .getDatosAxios('https://restcountries.com/v3.1/name/spain')
      .then((response: any) => {
        console.log(response.data[0].translations.ara.official);
        this.capital = response.data[0].translations.jpn.official;
      });
    this.service
      .getDatos('https://restcountries.com/v3.1/name/france')
      .subscribe((response: any) => {
        this.fronteras = response[0].borders;
      });
  }

  cambiar() {
    this.valorParaIf = !this.valorParaIf;
  }

  rellenaPaises() {
    this.service
      .getDatos(`https://restcountries.com/v3.1/region/${this.continente}`)
      .subscribe((response: any) => {
        this.paises = [];
        response.forEach((pais: any) => {
          this.paises.push(pais.name.common);
        });
      });
  }
}
