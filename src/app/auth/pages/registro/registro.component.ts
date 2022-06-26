import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosUsuario } from '../../../gym/interfaces/DatosUsuario';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../../gym/services/api.service';
import { Usuario } from 'src/app/gym/interfaces/Usuario';
import Swal from "sweetalert2";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['a',[Validators.required]],
    apellidos: ['a',[Validators.required]],
    edad: ['1',[Validators.required]],
    peso: ['1',[Validators.required]],
    altura: ['1',[Validators.required]],
    ciudad: ['a',[Validators.required]],
    pais: ['a',[Validators.required]],
    email: ['as@a',[Validators.required, Validators.email]],
    usuario: ['carlos',[Validators.required, Validators.minLength(3)]],
    password: ['carlos',[Validators.required, Validators.minLength(3)]],
  })

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
    usuario:Usuario= {
      usuario: "",
      password: ""
  }


  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private apiService:ApiService) { }

  ngOnInit(): void {
  }

  registro(){
    if(this.miFormulario.valid){
      this.usuario.usuario = this.miFormulario.controls["usuario"].value;
      this.usuario.password = this.miFormulario.controls["password"].value;

      this.apiService.postUsuario(this.usuario)
      .subscribe(res=>{
        this.datosUsuario.ID_usuario=res.ID;
        this.datosUsuario.nombre = this.miFormulario.controls["nombre"].value;
        this.datosUsuario.apellidos = this.miFormulario.controls["password"].value;
        this.datosUsuario.edad = this.miFormulario.controls["edad"].value;
        this.datosUsuario.peso = this.miFormulario.controls["peso"].value;
        this.datosUsuario.altura = this.miFormulario.controls["altura"].value;
        this.datosUsuario.ciudad = this.miFormulario.controls["ciudad"].value;
        this.datosUsuario.pais = this.miFormulario.controls["pais"].value;
        this.datosUsuario.email = this.miFormulario.controls["email"].value;
        this.apiService.postDatosUsuario(this.datosUsuario)
        .subscribe(res=>{
          console.log(res)
          Swal.fire('Bienvenido', "¡Usuario creado correctamente!", 'success')
          this.miFormulario.reset();
          this.login()
        }
        )

      },err=>{
        Swal.fire('Error', err.error.msg, 'error')
      })
    }
  }

  login() {
    const {usuario, password} = this.usuario;

    this.authService.login(usuario!, password!)
    .subscribe(res=>{
      if(res.ok){
        this.router.navigateByUrl('/gymApp/home')
      } else{
        Swal.fire('Error', res, 'error')
      }
    })
  }

}
