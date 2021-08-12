import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title = 'Mini Calculadora';

  numero1: number = 0;
  numero2: string = '';
  resultado: number = 0;



  sumar(): void {
    console.log(Math.E);
    let concatenado = `4**0.5`
    console.log(concatenado);
    try {
      console.log(eval(concatenado));
      
    } catch (error) {
      alert("que pusiste gil")
    }
  }

  operacion(numero: number): void {
    console.log(numero);
  }
  operando(operando: string): void {
    console.log(operando);

  }







  constructor() { }

  ngOnInit(): void {
  }

}
