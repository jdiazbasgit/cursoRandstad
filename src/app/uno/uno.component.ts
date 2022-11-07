import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Language, Valores } from '../interfaces';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit, OnChanges {

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
  countries: string[] = [];
  langs: any[] = [];
  translations: Language[] = [];
  translationsKeys: string[] = [];
  languages: string[] = [];
  loadingLangs: boolean = false;
  searchedCountries: string = ''

  @Input() countrySelected: string;
  @Output() resultado = new EventEmitter<any>();

  constructor(private service: PaisesService) {
    this.continente = '0';
    this.countrySelected = '0';
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.getCountryInfo();
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
      this.getLangs(this.translationsKeys)
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

    langs.forEach((lang: string, index: number) => {
      this.langs[index] = [];
      this.service.getDatos(`https://restcountries.com/v3.1/lang/${lang}`)
        .pipe(
          first(),
        )
        .subscribe({
          next: (response: any) => {
            this.languages[index] = response[0].languages[lang];
            response.forEach((country: any) => {
            this.langs[index].push(country.name.official)
            });
          },
          error: (err: any) => {
            this.langs[index] = [];
          }
        });
    });

    this.loadingLangs = false;
    this.searchedCountries = this.searchedCountries? `${this.searchedCountries}, ${this.countrySelected}` : `${this.countrySelected}`;
    this.resultado.emit(this.searchedCountries);
  };
}
