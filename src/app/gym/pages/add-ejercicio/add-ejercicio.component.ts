import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Equipamiento } from '../../interfaces/Equipamiento';
import { TipoRutina } from '../../interfaces/TipoRutina';
import { ApiService } from '../../services/api.service';
import { Ejercicio } from '../../interfaces/Ejercicios';
import { Musculo } from '../../interfaces/Musculo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-ejercicio',
  templateUrl: './add-ejercicio.component.html',
  styleUrls: ['./add-ejercicio.component.css']
})
export class AddEjercicioComponent implements OnInit {

  tipo_rutina: TipoRutina[]=[];
  equipamiento: Equipamiento[]=[];
  musculos: Musculo[]=[];

  ejercicio: Ejercicio = {
    nombre_ejercicio: "",         
    ID_musculo: 0,          
    ID_equipamiento: 0,
    realizacion: '', 
    video: ''
  };

  ejercicioForm: FormGroup = this.fb.group({
    formNombre: [, [Validators.required]],
    formMusculos: [, [Validators.required]],
    formEquipamiento: [, [Validators.required]],
    formRealizacion: [, [Validators.required]],
    formVideo: ['https://www.youtube.com/embed/kf0Af6A5wW8', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTipoRutina()
    .subscribe(res=>{
      this.tipo_rutina=res;
    })
    this.apiService.getEquipamiento()
    .subscribe(res=>{
      this.equipamiento=res;
    })
    this.apiService.getMusculos()
    .subscribe(res=>{
      this.musculos=res;
    })
  }

  onSubmit(){
    this.ejercicio.nombre_ejercicio = this.ejercicioForm.controls['formNombre'].value;
    this.ejercicio.ID_musculo = this.ejercicioForm.controls['formMusculos'].value;
    this.ejercicio.ID_equipamiento = this.ejercicioForm.controls['formEquipamiento'].value;
    this.ejercicio.realizacion = this.ejercicioForm.controls['formRealizacion'].value;
    this.ejercicio.video = this.ejercicioForm.controls['formVideo'].value;

    console.log(this.ejercicio)
    this.apiService.postEjercicio(this.ejercicio)
    .subscribe(res=>{

      console.log(res)
      this.ejercicioForm.reset();

      this.ejercicio = {
        nombre_ejercicio: "",         
        ID_musculo: 0,          
        ID_equipamiento: 0,
        realizacion: '',
        video: '',
      };
      Swal.fire('Agregado', res.msg, 'success')
    })
  }
}
