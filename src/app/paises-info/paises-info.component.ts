import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-paises-info',
  templateUrl: './paises-info.component.html',
  styleUrls: ['./paises-info.component.css']
})
export class PaisesInfoComponent implements OnInit {

  commonName:string="";
  officialName:string="";
  commonNativeName:string="";
  officialNativeName:string="";
  capital:string="";
  area:string="";
  poblacion:string="";

  continentes:Array<string>=["europe","asia","africa","americas","oceania"];
  paises:Array<string>=[];
  continente:string="0";
  pais:string="";

  constructor(private service:PaisesService) { }

  ngOnInit(): void {

  }

  obtenerDatosPais(){
    this.service.getDataAxios(`https://restcountries.com/v3.1/name/${this.pais}`)
    .then((response:any)=>{
      this.commonName=response.data[0].name.common;
      this.officialName=response.data[0].name.official;
      // this.commonNativeName=response.data[0].name.nativeName.spa.common;
      // this.officialNativeName=response.data[0].name.nativeName.spa.official;
      this.capital=response.data[0].capital;
      this.area=response.data[0].area;
      this.poblacion=response.data[0].population;
    })
  }


  rellenaPaises(){
    this.paises=[];
    this.service.getData(`https://restcountries.com/v3.1/region/${this.continente}`)
      .subscribe((response:any)=>{
        response.forEach((pais:any) => {
          this.paises.push(pais.name.common)
        });
      })
  }
}
