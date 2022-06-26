import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Clima } from '../../interfaces/Clima';
import { DatosUsuario } from '../../interfaces/DatosUsuario';
import { Usuario } from '../../interfaces/Usuario';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  datosUsuario:DatosUsuario = {
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

    usuario: Usuario = {
      ID_usuario: null,
      usuario: null,
      password: null,
      ID_tipo_usuario: null
  }

  clima!: Clima;


  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getID(localStorage.getItem('usuario')!)
    .subscribe(res=>{
      this.usuario.ID_usuario = res.ID_usuario;
      this.usuario.usuario = res.usuario;
      this.usuario.password = res.password;
      this.usuario.ID_tipo_usuario = res.ID_tipo_usuario;
      console.log(this.usuario)

      this.apiService.getDatosUsuario(this.usuario.ID_usuario!)
      .subscribe(res=>{
        this.datosUsuario=res
        console.log(res)
      })
    })

    this.apiService.getTiempo().subscribe(res=>{
      console.log(res)
      this.clima=res
    });
  }


}
