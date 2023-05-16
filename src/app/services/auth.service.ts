import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //currentUserSubject: BehaviorSubject<any>;
  constructor(private auth: Auth, private http: HttpClient) {
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  login({email, password}: any){
    let data = signInWithEmailAndPassword(this.auth, email, password);
    //sessionStorage.setItem('currentUser', JSON.stringify(data));
    return data;
  }

  logout(){
    localStorage.removeItem('token');
    return signOut(this.auth);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token'); // get token from local storage
    if(token != null) {
      const payload = window.atob(token.split('.')[1]); // decode payload of token
      const parsedPayload = JSON.parse(payload); // convert payload into an Object
      return parsedPayload.exp > Date.now() / 1000; // check if token is expired
    }
    else{
      return false;
    }
  }
}
