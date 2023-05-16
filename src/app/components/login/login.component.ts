import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onSend(){
    this.auth.login(this.form.value)
    .then(async response => {
      // const token = response.user.getIdTokenResult(false).then(response => console.log(response.token)).toString();
      const token = response.user.getIdTokenResult(false).then(response =>{ return response.token}).catch(() => {return ""});
      localStorage.setItem('token', await token);
      this.router.navigate(['/portfolio']);
    })
    .catch(eror =>{
      console.log(eror);
    });
  }
}
