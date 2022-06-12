import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    const {usuario, password} = this.miFormulario.value;

    this.authService.login(usuario, password)
    .subscribe(res=>{
      if(res.ok){
        this.router.navigateByUrl('/gymApp')
      } else{
        Swal.fire('Error', res, 'error')
        this.miFormulario.reset();
      }
    })
  }

}
