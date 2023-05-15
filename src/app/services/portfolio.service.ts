import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * Eventos a los que nos vamos a suscribir
 * y nos llegaran de forma asincrona 
 */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="https://portfolio-be-qrys.onrender.com";
  urlLocal:string="https://localhost:8080";
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    //let data = this.http.get<any>(this.urlLocal + "/viewSections");
    //console.log("PEDIDOOOOO");
    //console.log(data);
    //return (data);
    return this.http.get('./assets/data/data.json');
  }
}
