import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Musculo} from '../interfaces/Musculo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMusculos():Observable<Musculo>{
    return this.http.get(`${this.API_URI}/musculosimplicados`)
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
}
