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
  urlLocal:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  getSections():Observable<any>{
    let sections = this.http.get<any>(this.url + "/viewSections");
    return (sections);
  }

  getSubsection(key: string):Observable<any>{
    let subsection = this.http.get<any>(this.url + "/searchSubsectionBySection/" + key);
    return (subsection);
  }
}
