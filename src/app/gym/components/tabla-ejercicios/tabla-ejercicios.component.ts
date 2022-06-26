import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DatosUsuario } from '../../interfaces/DatosUsuario';
import { Usuario } from '../../interfaces/Usuario';
import { ApiService } from '../../services/api.service';
import { Ejercicio } from '../../interfaces/Ejercicios';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarEjercicioComponent } from '../confirmar-ejercicio/confirmar-ejercicio.component';

@Component({
  selector: 'app-tabla-ejercicios',
  templateUrl: './tabla-ejercicios.component.html',
  styleUrls: ['./tabla-ejercicios.component.css'],
  animations:[
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablaEjerciciosComponent implements OnInit {

  dataSource: Ejercicio[]= [];
  datosUsuario: DatosUsuario = {
    nombre: '',
    apellidos: '',
    edad: 0,
    peso: 0,
    altura: 0,
    ciudad: '',
    pais: '',
    email: '',
    ID_usuario: 0
    }
  columnsToDisplay = ['nombre_ejercicio', 'ID_musculo', 'ID_equipamiento', 'video'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: | null | undefined;
  displayedColumns: string[] = ['id', 'usuario', 'tipoUsuario', 'eliminar'];
  usuarios: Usuario[] = [];
  @ViewChild('miTabla') miTabla: MatTable<any> | undefined
  constructor(private apiService: ApiService, private snackbar: MatSnackBar,
    public dialog: MatDialog) { }
 
  

  ngOnInit(): void {
    this.apiService.getEjercicios().
    subscribe((respuesta)=>{
      console.log(respuesta)
      this.dataSource = respuesta;
    });
  }


  eliminar(id: number){
    this.apiService.eliminarDatosUsuario(id).subscribe(res=>{console.log(res)})
    this.apiService.eliminarUsuario(id).subscribe(res=>{console.log(res)})
    window.location.reload();
  }

  getDatosUsuario(ID_usuario: number){
    this.datosUsuario = {
      nombre: null,
      apellidos: null,
      edad: null,
      peso: null,
      altura: null,
      ciudad: null,
      pais: null,
      email: null,
      ID_usuario: null
      }
    this.apiService.getDatosUsuario(ID_usuario)
    .subscribe((respuesta)=>{
      console.log(respuesta)
      this.datosUsuario = respuesta;
    });
  }


  borrar(ID_ejercicio:number){
    const dialog = this.dialog.open(ConfirmarEjercicioComponent, {
      width: '350px',
      data: this.datosUsuario
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        if(result){
          console.log(ID_ejercicio)
          this.apiService.deleteEjercicio(ID_ejercicio)
          .subscribe(res=>{console.log(res)})
          window.location.reload();
        }
          })
        }
      }
    


  


