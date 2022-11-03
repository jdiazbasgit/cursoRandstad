import { Component, Input, OnInit } from '@angular/core';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {

  @Input() paisForInfo:string | undefined;
  commonName:string="";
  officialName:string="";
  commonNativeName:string="";
  officialNativeName:string="";
  capital:string="";
  area:string="";
  poblacion:string="";
  paisInfo:Array<any>=[];

  constructor(private service:PaisesService) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.getDataCountry();
  }

  getDataCountry(){
    if(this.paisForInfo != ""){
      this.service.getData(`https://restcountries.com/v3.1/name/${this.paisForInfo}`)
      .subscribe((response:any)=>{
        this.paisInfo=response[0]
        this.commonName=response[0].name.common;
        this.officialName=response[0].name.official;
        this.capital=response[0].capital;
        this.area=response[0].area;
        this.poblacion=response[0].population;
      })
    }  
  }
}
