import { Component, Input, OnInit } from '@angular/core';
import { MiInterfaz } from '../interfaces';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-traducciones',
  templateUrl: './traducciones.component.html',
  styleUrls: ['./traducciones.component.css']
})
export class TraduccionesComponent implements OnInit {

  @Input() paisForInfo:string | undefined;
  prueba:string="";
  miArray:Array<Array<MiInterfaz>>=[[]];
  paisesQueTraducen:Array<string>=[];
  officials:Array<string>=[];
  officialsSiglas:Array<string>=[];
  paisSiglasTrad:Array<string>=[];
  paisTraduccion:Array<string>=[];

  traducciones:Array<MiInterfaz>=[];
  keysTraducciones:Array<string>=[];
  langs:Array<any>=[];
  languages:Array<string>=[];

  constructor(private service:PaisesService) { }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(): void {
    this.getTradDataCountry();
  }

  getTradDataCountry(){
    // if(this.paisForInfo!=""){
    //   this.service.getData(`https://restcountries.com/v3.1/name/${this.paisForInfo}`)
    //   .subscribe((response:any)=>{
    //     let { translations } = response[0];
    //     Object.entries(translations).forEach((translation:any) => {
    //       let sigla:any=Object.values(translation)[0]
    //       this.officialsSiglas.push(sigla)
    //       let cosa:any=Object.values(translation)[1]
    //       cosa = Object.entries(cosa)
    //       cosa = cosa[0]
    //       this.officials.push(cosa[1])
    //       this.miArray.push([sigla, cosa[1]])
    //     });
        
    //     this.miArray.shift()

    //     this.miArray.forEach((traduccion:any) => {
    //     });
    //     this.officialsSiglas.forEach((sigla:any) => {
    //       this.service.getData(`https://restcountries.com/v3.1/lang/${sigla}`)
    //       .subscribe({
    //         next: (response: any) => {
    //           if(response.length === 1){
    //             this.paisesQueTraducen.push(response[0].name.official)
    //           } else {
    //             for(let i=0; i<response.length; i++){ 
    //               this.paisesQueTraducen.push(response[i].name.official)
    //             }
    //           }
    //         },
    //         error: (err:any) => {
    //           console.log(err)
    //         }
    //       })
    //     });
    //     console.log("this.paisesQueTraducen",this.paisesQueTraducen)
    //   })

      
    // }

    this.service.getData(`https://restcountries.com/v3.1/name/${this.paisForInfo}`)
    .subscribe((response: any) => {
      //this.loadingLangs = true;
      this.traducciones = Object.values(response[0].translations);
      this.keysTraducciones = Object.keys(response[0].translations);
      this.getLangs(this.keysTraducciones)
    });
  }

  getLangs(langs:any){
    langs.forEach((lang:string, index: number) => {
      this.langs[index] = [];
      this.service.getData(`https://restcountries.com/v3.1/lang/${lang}`)
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
      })
    });
    
    console.log('this.langs',this.langs)
    console.log('this.languages',this.languages)
    console.log('this.traducciones',this.traducciones)
  }

}