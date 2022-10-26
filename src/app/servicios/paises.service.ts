import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient:HttpClient) { }

  //Usando HttpClient de Angular
  getData(url:string){
    return this.httpClient.get(url);
  }

  //Estándar JavaScript para llamadas Ajax
  getDataFetch(url:string){
    return new Promise((resolve,reject)=>{
      fetch(url)
        .then(response=>response.json())
          .then(data=>resolve(data))
          .catch(error=>reject(error))
    })
  }

  //Estándar JavaScript para llamadas Axios
  getDataAxios(url:string){
    return axios.get(url);
  }
}
