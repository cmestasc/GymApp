import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { DatosUsuario } from '../../interfaces/DatosUsuario';
import { Usuario } from 'src/app/gym/interfaces/Usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: DatosUsuario = {
    nombre: "null",         
    apellidos: null,          
    edad: null,
    peso: null, 
    altura: null,
    ciudad: null,
    pais: null,
    email: null,
    ID_usuario: null
  };
  usuarioActual!: DatosUsuario;

  user!: Usuario;
 

  usuarioForm: FormGroup = this.fb.group({
    formNombre: [, [Validators.required]],
    formApellidos: [, [Validators.required]],
    formEdad: [, [Validators.required]],
    formPeso: [, [Validators.required]],
    formAltura: [, [Validators.required]],
    formCiudad: [, [Validators.required]],
    formPais: [, [Validators.required]],
    formEmail: [, [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.apiService.getID(localStorage.getItem("usuario")!)
    .subscribe(res=>{
      console.log(res)
      this.user=res;
      console.log(this.user)
      this.apiService.getDatosUsuario(this.user.ID_usuario!)
      .subscribe(res=>{
        console.log(res)
        this.usuarioActual = res;
        this.usuarioForm= this.fb.group({
          formNombre: [this.usuarioActual.nombre, [Validators.required]],
          formApellidos: [this.usuarioActual.apellidos, [Validators.required]],
          formEdad: [this.usuarioActual.edad, [Validators.required]],
          formPeso: [this.usuarioActual.peso, [Validators.required]],
          formAltura: [this.usuarioActual.altura, [Validators.required]],
          formCiudad: [this.usuarioActual.ciudad, [Validators.required]],
          formPais: [this.usuarioActual.pais, [Validators.required]],
          formEmail: [this.usuarioActual.email, [Validators.required, Validators.email]]
        });
      })
    })
  
  }

  onSubmit(){
    this.usuario.nombre = this.usuarioForm.controls['formNombre'].value;
    this.usuario.apellidos = this.usuarioForm.controls['formApellidos'].value;
    this.usuario.edad = this.usuarioForm.controls['formEdad'].value;
    this.usuario.peso = this.usuarioForm.controls['formPeso'].value;
    this.usuario.altura = this.usuarioForm.controls['formAltura'].value;
    this.usuario.ciudad = this.usuarioForm.controls['formCiudad'].value;
    this.usuario.pais = this.usuarioForm.controls['formPais'].value;
    this.usuario.email = this.usuarioForm.controls['formEmail'].value;
    this.usuario.ID_usuario = this.usuarioActual.ID_usuario;

    console.log(this.usuario)
    this.apiService.updateDatosUsuario(this.usuario)
    .subscribe(res=>{
      console.log(res)
      Swal.fire('Actualizado', res.msg, 'success')
      this.router.navigateByUrl('/gymApp/home')
    })


  }
}
