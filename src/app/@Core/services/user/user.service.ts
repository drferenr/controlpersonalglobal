import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../../models/message/message.model';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logintest:BehaviorSubject<Message>;
  message:Message|null;

  constructor() {

    this.message = new Message();
    this.message.Message = "none";
    this.message.Code = 0;
    this.logintest = new BehaviorSubject(this.message);
    
   }

  login(user:User):Observable<Message>{
    console.log(user);
    if (user.Username === 'Gabi' && user.Password === '123456'){
      this.message = new Message();
      this.message.Message = "Exito";
      this.message.Code = 200;
      this.logintest.next(this.message);
    }else{
      this.message = new Message();
      this.message.Message = "Fallido";
      this.message.Code = 500;
      this.logintest.next(this.message);
    }
    return this.logintest
  }
  register(){
    console.log("hola mundo");
  }
}
