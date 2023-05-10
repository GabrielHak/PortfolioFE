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

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }
}
