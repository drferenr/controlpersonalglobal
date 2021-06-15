import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../@Core/models/user/user.model';
import { UserService } from '../@Core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  user:User|null;

  constructor(private formBuilder: FormBuilder, private userservice:UserService, private route:Router) {
    this.user = new User();
    this.user.Username = "";
    this.user.Password = ""
    this.form = formBuilder.group({
      Username: new FormControl(this.user.Username, [Validators.required,  Validators.minLength(4)]),
      Password: new FormControl(this.user.Password, [Validators.required, Validators.minLength(4)])
    });
   }  

  ngOnInit(): void {
  }

  login(){
    this.user = this.form.value;
    this.userservice.login(this.user!).subscribe(message => { 
      
    });
  }

    
  get Username() { return this.form.get('Username'); }

  get Password() { return this.form.get('Password'); }

  openRegister(){
    this.route.navigate(['registro']);
  }

}
