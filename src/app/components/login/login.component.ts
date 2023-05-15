import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router){
    this.form = formBuilder.group({
      email:['',Validators.required, Validators.email],
      password:['',Validators.required, Validators.minLength(8)],
      deviceInfo:this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: ["DEVICE_TYPEANDROID"],
        notificationToken: ["67657575eececc34"]
      })
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

  onSend(event: Event){
    event.preventDefault();
    this.auth.logIn(this.form.value).subscribe(data => {
      console.log("Data: " + JSON.stringify(data));
      this.router.navigate(["/portfolio"]);
    });
  }
}
