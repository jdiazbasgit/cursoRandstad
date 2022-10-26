import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {

  commonName:string="";
  officialName:string="";
  commonNativeName:string="";
  officialNativeName:string="";
  capital:string="";
  area:string="";
  poblacion:string="";

  constructor(private service:PaisesService) { }

  ngOnInit(): void {
    this.service.getDataAxios("https://restcountries.com/v3.1/name/spain")
    .then((response:any)=>{
      this.commonName=response.data[0].name.common;
      this.officialName=response.data[0].name.official;
      this.commonNativeName=response.data[0].name.nativeName.spa.common;
      this.officialNativeName=response.data[0].name.nativeName.spa.official;
      this.capital=response.data[0].capital;
      this.area=response.data[0].area;
      this.poblacion=response.data[0].population;
    })
  }

}
