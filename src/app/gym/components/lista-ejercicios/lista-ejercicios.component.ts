import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Ejercicio } from '../../interfaces/Ejercicios';
import { Musculo } from '../../interfaces/Musculo';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-ejercicios',
  templateUrl: './lista-ejercicios.component.html',
  styleUrls: ['./lista-ejercicios.component.css']
})
export class ListaEjerciciosComponent implements OnInit, OnChanges {

  constructor(private apiService:ApiService, public sanitizer: DomSanitizer) { }

  @Input () musculo!: Musculo;


  ejercicios: Ejercicio[] = []

  ngOnInit(): void {
    console.log(this.musculo)

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.apiService.getDatosEjercicios(this.musculo.ID_musculo!)
    .subscribe((res)=>{
      console.log(res)
      this.ejercicios = res;
    });


  }

}
