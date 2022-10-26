import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../servicios/paises.service';
import { Valores } from '../interfaces';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  texto:string="Miguel";
  nombreCorto:string="";
  nombreLargo:string="";
  capital:string="";
  valorParaIf:boolean=false;
  fronteras:Array<string>=[];
  continentes:Array<string>=["europe","asia","africa","americas","oceania"];
  paises:Array<string>=[];
  continente:string="0";
  valores:Array<Valores>=[];
  valor:number=1;

  constructor(private service:PaisesService) { }

  ngOnInit(): void {

    let valor1:Valores={id:1,texto:"valor1"};
    let valor2:Valores={id:2,texto:"valor2"};
    let valor3:Valores={id:3,texto:"valor3"};

    this.service.getData("https://restcountries.com/v3.1/name/spain").subscribe((response:any)=>{
      console.log("llamada con httpClient:"+response[0].name.common)
      this.nombreCorto=response[0].name.common
    })

    this.service.getDataFetch("https://restcountries.com/v3.1/name/spain")
      .then((data:any)=>{
        console.log("llamada con fetch:",data[0].name.official)
        this.nombreLargo=data[0].name.official
      })
      .catch((error:any)=>console.log(error))

    this.service.getDataAxios("https://restcountries.com/v3.1/name/spain")
      .then((response:any)=>{
        console.log("llamada con axios:",response.data[0].capital)
        this.capital=response.data[0].capital;
      })

    this.service.getData("https://restcountries.com/v3.1/name/spain").subscribe((response:any)=>{
      this.fronteras = response[0].borders
    })

    console.log("entrando en el componente")
  }

  cambiar(){
    this.valorParaIf=!this.valorParaIf;
  }

  rellenaPaises(){
    this.service.getData(`https://restcountries.com/v3.1/region/${this.continente}`)
      .subscribe((response:any)=>{
        response.forEach((pais:any) => {
          this.paises.push(pais.name.common)
        });
      })
  }


}
