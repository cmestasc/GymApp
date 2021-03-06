import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { Usuario } from 'src/app/gym/interfaces/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario: Usuario | undefined;
  constructor(private http: HttpClient) { }


  get usuario() {
    return {...this._usuario};
  }

  get usuarioLocalStorage() {
    return localStorage.getItem('usuario');
  }
  get idUsuarioLocalStorage() {
    return localStorage.getItem('ID_tipo_usuario');
  }

  login(usuario: string, password: string) {
    const url = `${this.baseUrl}/usuarios/login`;
    const body = { usuario, password };

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap(resp => {
        if(resp.ok) {
          localStorage.setItem('usuario', usuario);
          this._usuario = {
            usuario: usuario,
            password: password
          }
        }
      }),
      map(resp => resp),
      catchError(err => of(err.error.msg))
    )
  }

  verificarAutenticacion(): Observable<boolean>{
    if(localStorage.getItem('usuario')){
      return of(true);
    }
    return of(false);
  }


}
