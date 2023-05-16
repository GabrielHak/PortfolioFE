import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentData = localStorage.getItem('token');
    if(currentData != null) {
      req = req.clone({
        setHeaders:{
          Authorization: 'Bearer ' + currentData
        }
      });
    }
    return next.handle(req);
  }
}
