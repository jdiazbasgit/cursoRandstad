import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient:HttpClient) { }

  getDatos(url:string){
    return this.httpClient.get(url);
  }

  getDatosFetch(url:string){
    return new Promise((resolve,reject)=>{
      fetch(url).then(response=>response.json())
      .then(datos=>resolve(datos)).catch(error=>reject(error));
    })
  }

  getDatosAxios(url:string){
    return axios.get(url);
  }
}
