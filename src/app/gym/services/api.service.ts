import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Musculo} from '../interfaces/Musculo'
import { delay, Observable } from 'rxjs';
import { DatosUsuario } from '../interfaces/DatosUsuario';
import { TipoRutina } from '../interfaces/TipoRutina';
import { Equipamiento } from '../interfaces/Equipamiento';
import { Ejercicio } from '../interfaces/Ejercicios';
import { Usuario } from '../interfaces/Usuario';
import { Clima } from '../interfaces/Clima';
import { Rutina } from '../interfaces/Rutina';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMusculos():Observable<Musculo[]>{
    return this.http.get<Musculo[]>(`${this.API_URI}/musculosimplicados`)
  }

  getMusculo(id:string){
    return this.http.get(`${this.API_URI}/musculosimplicados/${id}`)
  }

  deleteMusculo(id:string){
    return this.http.delete(`${this.API_URI}/musculosimplicados/${id}`)
  }

  saveMusculo(musculo:Musculo){
    return this.http.post(`${this.API_URI}/musculosimplicados`, musculo)
  }

  updateMusculo(id:string, musculoActualizado:Musculo): Observable<Musculo>{
    return this.http.put(`${this.API_URI}/musculosimplicados/${id}`, musculoActualizado)
  }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.API_URI}/usuarios`)
  }
  eliminarUsuario(id: number):Observable<any>{
    let body = { 
      ID_usuario: id 
    }
    return this.http.delete<any>(`${this.API_URI}/usuarios/delete`, {body})
  }

  eliminarDatosUsuario(id: number):Observable<any>{
    let body = { 
      ID_usuario: id 
    }
    return this.http.delete<any>(`${this.API_URI}/datosUsuario/delete`, {body})
  }

  getDatosUsuario(ID_usuario: number):Observable<DatosUsuario>{
    let body = {"ID_usuario": ID_usuario}
    return this.http.post<DatosUsuario>(`${this.API_URI}/datosusuario`, body)
  }

  getTipoRutina():Observable<TipoRutina[]>{
    return this.http.post<TipoRutina[]>(`${this.API_URI}/tipoRutina`,"")
  }
  getEquipamiento():Observable<Equipamiento[]>{
    return this.http.post<Equipamiento[]>(`${this.API_URI}/equipamiento`,"")
  }
  postEjercicio(ejercicio: Ejercicio):Observable<Ejercicio>{
    let body = { 
      "nombre_ejercicio": ejercicio.nombre_ejercicio,         
      "ID_musculo": ejercicio.ID_musculo,          
      "ID_equipamiento": ejercicio.ID_equipamiento,
      "realizacion": ejercicio.realizacion,
      "video": ejercicio.video,
    }
    return this.http.post<Ejercicio>(`${this.API_URI}/ejercicios/create`,body)
  }
  getMusculoID(musculo: string):Observable<Musculo>{
    let body = {      
      "musculo": musculo
    }
    return this.http.post<Musculo>(`${this.API_URI}/musculosImplicados/musculoNombre`,body)
  }

  getDatosEjercicios(ID_musculo: number):Observable<Ejercicio[]>{
    let body = {        
      "ID_musculo": ID_musculo      
    }
    return this.http.post<Ejercicio[]>(`${this.API_URI}/ejercicios/ejercicio`,body)
  }

  getEjercicios():Observable<Ejercicio[]>{
    return this.http.post<Ejercicio[]>(`${this.API_URI}/ejercicios`,"")
  }

  getRutinas():Observable<Rutina[]>{
    return this.http.post<Rutina[]>(`${this.API_URI}/rutinas`,"")
  }

  postDatosUsuario(datos: DatosUsuario):Observable<any>{
    let body = { 
      "nombre": datos.nombre,         
      "apellidos": datos.apellidos,          
      "edad": datos.edad,
      "peso": datos.peso,
      "altura": datos.altura,
      "ciudad": datos.ciudad,
      "pais": datos.pais,
      "email": datos.email,
      "ID_usuario": datos.ID_usuario
    }
    return this.http.post<any>(`${this.API_URI}/datosUsuario/insertDatos`,body)
  }

  postUsuario(datos: Usuario):Observable<any>{
    let body = { 
      usuario: datos.usuario,         
      password: datos.password,          
      ID_tipo_usuario: 3
    }
    return this.http.post<any>(`${this.API_URI}/usuarios/insertar`,body)
  }

  getID(usuario: string):Observable<any>{
    let body = { 
      usuario: usuario
    }
    return this.http.post<any>(`${this.API_URI}/usuarios/getID`,body)
  }

  getTiempo():Observable<Clima>{
    return this.http.get<Clima>(`https://www.el-tiempo.net/api/json/v2/provincias/39`)
    .pipe(
      delay(3000)
    )
  }
}
