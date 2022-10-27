import { Component, OnInit } from '@angular/core';

import { PaisesService } from '../servicios/paises.service';
import { Valores } from '../interfaces';
import { first } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css'],
})
export class PrimerComponenteComponent implements OnInit {
  texto: string = 'federico';
  nombreCorto: string = '';
  nombreLargo: string = '';
  capital: string = '';
  valorParaIf: boolean = false;
  fronteras: Array<string> = [];
  regiones: Array<string> = ['europe', 'asia', 'africa', 'americas', 'oceania'];
  paises: Array<string> = [];
  continente: string;
  valores:Array<Valores>=[]
  valor:number=2;

  countryInfo: any = '';
  bordersCommons: string[] = []
  valueForIf: boolean = false;
  regions: string[] = ["europe", "asia", "africa", "americas", "oceania"];
  regionSelected: string = '0';
  countrySelected: string = '0'
  countries: string[] = [];
  langs: any[] = [];
  translations: any[] = [];
  translationsKeys: any[] = [];
  languages: any[] = [];
  loadingLangs: boolean = false;

  constructor(private service: PaisesService) {
    this.continente = '0';
  }

  ngOnInit(): void {
    // let valor1:Valores={id:1,texto:"valor1"}
    // let valor2:Valores={id:2,texto:"valor2"}
    // let valor3:Valores={id:3,texto:"valor3"}

    // this.service
    //   .getDatos('https://restcountries.com/v3.1/name/spain')
    //   .subscribe((response: any) => {
    //     console.log('llamada con httpClient:' + response[0].name.common);
    //     this.nombreCorto = response[0].name.common;
    //   });

    // this.service
    //   .getDatosFetch('https://restcountries.com/v3.1/name/spain')
    //   .then((datos: any) => {
    //     console.log('llamada con fetch:' + datos[0].name.official);
    //     this.nombreLargo = datos[0].name.official;
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });

    // this.service
    //   .getDatosAxios('https://restcountries.com/v3.1/name/spain')
    //   .then((response: any) => {
    //     console.log(response.data[0].translations.ara.official);
    //     this.capital = response.data[0].translations.jpn.official;
    //   });
    // this.service
    //   .getDatos('https://restcountries.com/v3.1/name/france')
    //   .subscribe((response: any) => {
    //     this.fronteras = response[0].borders;
    //   });
  }

  cambiar() {
    this.valorParaIf = !this.valorParaIf;
  }

  rellenaPaises() {
    this.countrySelected = '0';
    this.paises = [];
    this.countryInfo = [];
    this.translations = [];

    this.service
      .getDatos(`https://restcountries.com/v3.1/region/${this.continente}`)
      .subscribe((response: any) => {
        this.paises = [];
        response.forEach((pais: any) => {
          this.paises.push(pais.name.common);
        });
      });
  }

  /**
  * Function to get country info
  */
   getCountryInfo(): void {
    this.countryInfo = [];
    this.translations = [];
    this.service.getDatos(`https://restcountries.com/v3.1/name/${this.countrySelected}`)
    .pipe(
      first(),
    )
    .subscribe((response: any) => {
      this.loadingLangs = true;
      this.countryInfo = response[0] as any;
      if (response[0].borders) {
        this.getBorders(response[0].borders)
      }
      this.translations = Object.values(response[0].translations);
      this.translationsKeys = Object.keys(response[0].translations);
      this.getLangs(response[0].translations)
    });
  }

  /**
  * Function to get traductions
  */
  getBorders(borders: string[]): void {
    borders.forEach((border: string) => {
      this.service.getDatos('https://restcountries.com/v3.1/alpha/' + border )
      .pipe(
        first(),
      )
      .subscribe((response: any) => {
        this.bordersCommons.push(response[0].name.common);
      });
    });
  }

  /**
  * Function to get langs
  */
   getLangs(langs: any): void {
    this.langs = [];
    Object.keys(langs).forEach((lang: any, index) => {
      this.langs[index] = [];
      this.service.getDatos(`https://restcountries.com/v3.1/lang/${lang}`)
        .pipe(
          first(),
        )
        .subscribe((response: any) => {
          this.languages[index] = response[0].languages[lang];
          response.forEach((country: any) => {
            this.langs[index].push(country.name.official)
          });
        },
        (res: HttpErrorResponse) => this.langs[index] = []
        );
    });
    this.loadingLangs = false;
    console.log(this.langs)
    console.log(this.languages)
  };
}
