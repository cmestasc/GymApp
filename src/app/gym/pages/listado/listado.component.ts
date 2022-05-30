import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  musculos: string [] = ['pectoral', 'hombro', 'bíceps', 'tríceps', 'espalda', 'cuádriceps', 'femoral', 'gemelo', 'abdomen'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
