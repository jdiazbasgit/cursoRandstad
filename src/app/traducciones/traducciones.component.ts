import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-traducciones',
  templateUrl: './traducciones.component.html',
  styleUrls: ['./traducciones.component.css']
})
export class TraduccionesComponent implements OnInit {

  prueba:string="";
  officials:Array<string>=[];
  paisSiglasTrad:Array<string>=[];
  paisTraduccion:Array<string>=[];

  constructor(private service:PaisesService) { }

  ngOnInit(): void {
    
    this.service.getData("https://restcountries.com/v3.1/name/spain")
    .subscribe((response:any)=>{

      console.log("response",response)
      let { translations } = response[0];
      console.log("translations1",translations)
      translations = Object.entries(translations);

      console.log("translations",translations)

      this.officials = translations.map((translation:any)=>{
        return {
          name: translation[0],
          official: translation[1].official,
          common: translation[1].common
        }
      })

      console.log("officials",this.officials) 
      
    })


  }

}
