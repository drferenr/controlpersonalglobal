import { Component, OnInit } from '@angular/core';
import { User } from '../@Core/models/user/user.model';
import { UserService } from '../@Core/services/user/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.register();
  }

 

}
