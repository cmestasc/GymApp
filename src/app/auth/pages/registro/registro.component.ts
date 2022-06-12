import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    edad: ['',[Validators.required]],
    peso: ['',[Validators.required]],
    altura: ['',[Validators.required]],
    ciudad: ['',[Validators.required]],
    pais: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    usuario: ['',[Validators.required, Validators.minLength(5)]],
    password: ['',[Validators.required, Validators.minLength(5)]],
  })
  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  registro(){
    console.log(this.miFormulario.value)
    console.log(this.miFormulario.valid)
  }

}
