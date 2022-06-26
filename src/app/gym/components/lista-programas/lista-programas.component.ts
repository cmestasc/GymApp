import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Ejercicio } from '../../interfaces/Ejercicios';
import { Musculo } from '../../interfaces/Musculo';
import { Rutina } from '../../interfaces/Rutina';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-lista-programas',
  templateUrl: './lista-programas.component.html',
  styleUrls: ['./lista-programas.component.css']
})
export class ListaProgramasComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  rutinas: Rutina[] = []

  ngOnInit(): void {
    this.apiService.getRutinas()
    .subscribe((res)=>{
      console.log(res)
      this.rutinas = res;
    });

  }


  }
