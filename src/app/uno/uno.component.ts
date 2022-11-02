import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
paisRuta:string=""
  constructor(private rutaActiva:ActivatedRoute,private service:PaisesService) { }
ngOnInit(): void {
  this.paisRuta=this.rutaActiva.snapshot.params['pais']
  alert(this.paisRuta)
  }

  

  ngOnChanges(): void {
    this.paisRuta=this.rutaActiva.snapshot.params['pais']
    alert(this.rutaActiva)
    //if (this.dato != '0') {
      this.service
        .getDatos(`https://restcountries.com/v3.1/name/${this.rutaActiva}`)
        .subscribe((response: any) => {
          
          Object.entries(response[0].translations).forEach(traduccion=>{
            //console.log(Object.keys(traduccion))
            //console.log(Object.values(traduccion)[0])
            let objeto:any=Object.values(traduccion)[1]
            console.log(Object.values(traduccion)[0]+" - "+Object.values(objeto)[0])
          })
        });
    //}
  }

}
