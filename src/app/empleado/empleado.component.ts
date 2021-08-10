import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  
 nombre:string="seba";

 edad:number=43;


  constructor() { }

  ngOnInit(): void {
  }

}
