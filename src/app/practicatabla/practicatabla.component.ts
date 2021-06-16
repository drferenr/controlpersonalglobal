import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicatabla',
  templateUrl: './practicatabla.component.html',
  styleUrls: ['./practicatabla.component.sass']
})
export class PracticatablaComponent implements OnInit {

  users: any[] = []

  data = {
    nombre: "",
    apellido: "",
    ci: 0,
    email: ""
  }

  actualindex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {

    console.log(this.data);

    let actual = this.buscar(this.data.ci);

    console.log(actual);

    if (this.data.nombre !== '' && this.data.apellido !== ''
      && this.data.ci !== 0 && this.data.email !== '') {
        
      if (actual !== -1) {
        this.users[actual].ci = this.data.ci;
        this.users[actual].nombre = this.data.nombre;
        this.users[actual].apellido = this.data.apellido;
        this.users[actual].email = this.data.email;

      } else {
        this.users.push({
          nombre: this.data.nombre,
          apellido: this.data.apellido,
          ci: this.data.ci,
          email: this.data.email
        });
      }
      this.data = {
        nombre: "",
        apellido: "",
        ci: 0,
        email: ""
      };
    } else {
      alert("debe llenar todos los campos");
    }
  }


  edit(data: any) {
    this.data.nombre = data.nombre;
    this.data.apellido = data.apellido;
    this.data.ci = data.ci;
    this.data.email = data.email;

    this.actualindex = this.buscar(data.ci);
  }

  delete(ci: number): void {
    let index = this.buscar(ci);
    console.log(index);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  buscar(ci: number): number {
    for (let index = 0; index < this.users.length; index++) {
      console.log(this.users[index].ci === ci)
      console.log("Users: " + this.users[index].ci)
      console.log("Ci: " + ci)
      if (this.users[index].ci === ci) {
        return index;
      }
    }
    return -1;
  }


}
