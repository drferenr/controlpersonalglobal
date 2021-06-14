import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private userservice:UserService) {
    this.user = null;
    this.form = formBuilder.group({
      Username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
   }

   

  ngOnInit(): void {
  }

  login(){
    this.user = this.form.value;
    this.userservice.login(this.user!).subscribe(message => { 
      if(message.Code === 500){
        alert("Bad credentials");     
    } 
  });
  }

}
