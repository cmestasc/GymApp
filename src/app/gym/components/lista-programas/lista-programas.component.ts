import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Ejercicio } from '../../interfaces/Ejercicios';
import { Musculo } from '../../interfaces/Musculo';
import { Rutina } from '../../interfaces/Rutina';
import { ApiService } from '../../services/api.service';
import { DatosRutina } from '../../interfaces/datosRutina';

@Component({
  selector: 'app-lista-programas',
  templateUrl: './lista-programas.component.html',
  styleUrls: ['./lista-programas.component.css']
})
export class ListaProgramasComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  rutinas: Rutina[] = []

  datosRutina!: DatosRutina[];

  datosRutinaSelected!: DatosRutina[];

  rutinaFuerza: any = ["Press banca 3x5","Press militar 3x5","Dominadas 3x8","Sentadillas 3x8","Curl de bíceps 3x12"]
  rutina2: any = ["Press banca con mancuernas 3x5","Press banca inclinado 3x5","Press militar 3x8","Sentadillas 3x8","Prensa 3x12","Curl de bíceps 3x12"]
  rutina3: any = ["Press militar 3x5","Press banca 3x5","Sentadillas 3x8","Dominadas 3x8","Press francés 3x12"]
  rutina4: any = ["Press banca inclinado 3x5","Press banca declinado 3x10","Dominadas 3x12","Sentadillas 3x8","Prensa 3x12"]
  rutina5: any = ["Dominadas 3x10","Press militar con mancuernas 3x12","Remo con barra 3x12","Sentadillas 3x12","Prensa 3x12"]

  ngOnInit(): void {
    this.apiService.getRutinas()
    .subscribe((res)=>{
      console.log(res)
      this.rutinas = res;
    });

    this.apiService.getDatosRutinas()
    .subscribe(res=>{
      console.log(res)
      this.datosRutina = res
    })

    this.apiService.getDatosRutina(1)
    .subscribe(res=>{
      console.log(res)
      this.datosRutinaSelected = res
    })
  }
  


  }
