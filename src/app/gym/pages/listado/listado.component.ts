import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  musculos: string [] = ['pectoral', 'hombro', 'biceps', 'triceps', 'espalda', 'cuadriceps', 'femoral', 'gemelo', 'abdomen'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
