import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-datos-geograficos',
  templateUrl: './datos-geograficos.component.html',
  styleUrls: ['./datos-geograficos.component.css']
})
export class DatosGeograficosComponent implements OnInit {

  fronterasSiglas:Array<string>=[];
  fronteras:Array<string>=[];
  
  urlFlag:string="";
  urlCoat:string="";

  constructor(private service:PaisesService) { }

  ngOnInit(): void {
    this.service.getData("https://restcountries.com/v3.1/name/spain")
    .subscribe((response:any)=>{
      console.log(response[0])
      this.urlFlag = response[0].flags.svg
      this.urlCoat = response[0].coatOfArms.svg
      this.fronterasSiglas = response[0].borders
      
      for(let i=0; i<this.fronterasSiglas.length; i++){
        this.service.getData(`https://restcountries.com/v3.1/alpha/${this.fronterasSiglas[i]}`)
        .subscribe((responseSec:any)=>{
          this.fronteras.push(responseSec[0].name.common)
        })
      }
    })
  }

}
