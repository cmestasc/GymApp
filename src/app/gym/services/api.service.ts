import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Musculo} from '../interfaces/Musculo'
import { Observable } from 'rxjs';
import { Usuario } from '../classes/Usuario';
import { DatosUsuario } from '../interfaces/DatosUsuario';
import { TipoRutina } from '../interfaces/TipoRutina';
import { Equipamiento } from '../interfaces/Equipamiento';
import { Ejercicio } from '../interfaces/Ejercicios';

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
    return this.http.delete<any>(`${this.API_URI}/usuarios/${id}`)
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
}
