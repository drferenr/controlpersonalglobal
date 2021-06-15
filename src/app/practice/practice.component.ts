import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.sass']
})
export class PracticeComponent implements OnInit {

  

  resultado:string = "";
  LastValueSimbol: boolean = true;
  calcResult: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  checkValue(variab:string){

   
  }

  ejecutaroperacion(){
    let iter = this.resultado[this.resultado.length - 1];
    var operation = this.resultado;
    if( iter === " "){
      operation = operation.substring(0, operation.length-3);
    }else if( iter === "-"){
      operation = operation.substring(0, operation.length-4);
    }
    this.resultado ='';
    let matharray = operation.split(" ");
    var ResultadoFinal = Number(matharray[0]);
    for (let x = 1; x < matharray.length; x++){
      if (isNaN(Number(matharray[x]))){
        if(matharray[x] === '+'){
          ResultadoFinal = ResultadoFinal + Number(matharray[x + 1]);
        }else if(matharray[x] === '-'){
          ResultadoFinal = ResultadoFinal - Number(matharray[x + 1]);          
        }else if(matharray[x] === '*'){
          ResultadoFinal = ResultadoFinal * Number(matharray[x + 1]);
        }else if(matharray[x] === '/'){
          ResultadoFinal = ResultadoFinal / Number(matharray[x + 1]);
        }            
      }
    }
    if(isNaN(ResultadoFinal)){
      this.resultado = "Math Error";
    }else if(!isFinite(ResultadoFinal)){
      this.resultado = "∞";
    }else{
      this.resultado = ResultadoFinal.toString();
    }     
    this.calcResult = true;    
  }

  numer(variab:string){
    if(this.calcResult){
      this.resultado = "";
      this.calcResult = false;
    }
    if(variab === '+' || variab === '-' || variab === '*' || variab === '/' ){
      if(!this.LastValueSimbol){
        this.resultado = this.resultado + " " + variab + " ";
        this.LastValueSimbol = true;  
      }else if(variab === '-'){
        if(this.resultado[this.resultado.length - 1] !== '-'){
          this.resultado = this.resultado + variab;
        }        
      }          
    }else{
      this.resultado = this.resultado + variab;
      this.LastValueSimbol = false;  
    }    
  }

  clear(action:string){
    if(action === 'AC'){
      this.resultado = "";
    }else{
      this.resultado = this.resultado.substring(0, this.resultado.length-1);
    }
  }
}
