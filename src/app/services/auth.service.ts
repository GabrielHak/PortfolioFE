import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://npinti.ddns.net:9008/api/auth/login';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("Ejecutando servicio");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  // isLoggedIn() {
  //   const token = localStorage.getItem('token'); // get token from local storage
  //   const payload = atob(token.split('.')[1]); // decode payload of token
  //   const parsedPayload = JSON.parse(payload); // convert payload into an Object

  //   return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  // }

  logIn(credentials:any): Observable<any> {
    return this.http.post(this.url, credentials).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}
