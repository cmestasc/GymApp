import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Clima } from '../../interfaces/Clima';
import { DatosUsuario } from '../../interfaces/DatosUsuario';
import { Usuario } from '../../interfaces/Usuario';
import { ApiService } from '../../services/api.service';
const provincias = {
  "Vitoria-Gasteiz": 1, 
  "Albacete": 2,
  "Alicante": 3,
  "Almería": 4,
  "Ávila": 5,
  "Badajoz": 6,
  "Palma de Mallorca": 7,
  "Barcelona": 8,
  "Burgos": 9,
  "Cáceres": 10,
  "Cádiz": 11,
  "Castellón": 12,
  "Ciudad Real": 13,
  "Córdoba": 14,
  "Coruña": 15,
  "Cuenca": 16,
  "Girona": 17,
  "Granada": 18,
  "Guadalajara": 19,
  "San Sebastián": 20,
  "Huelva": 21,
  "Huesca": 22,
  "Jaén": 23,
  "León": 24,
  "Lleida": 25,
  "Logroño": 26,
  "Lugo": 27,
  "Madrid": 28,
  "Málaga": 29,
  "Murcia": 30,
  "Pamplona": 31,
  "Ourense": 32,
  "Oviedo": 33,
  "Palencia": 34,
  "Las Palmas de Gran Canaria": 35,
  "Pontevedra": 36,
  "Salamanca": 37,
  "Santa Cruz de Tenerife": 38,
  "Santander": 39,
  "Segovia": 40,
  "Sevilla": 41,
  "Soria": 42,
  "Tarragona": 43,
  "Teruel": 44,
  "Toledo": 45,
  "Valencia": 46,
  "Valladolid": 47,
  "Bilbao": 48,
  "Zamora": 49,
  "Zaragoza": 50,
  "Ceuta": 51,
  "Melilla": 52
  }

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
      })
    })

    window.setTimeout(()=>{
      this.apiService.getTiempo(this.getCodigo(this.datosUsuario.ciudad!)).subscribe(res=>{
        console.log(res)
        this.clima=res
      });
    }, 4000);
    
  }

 getCodigo(ciudad:string): number{
  console.log(this.datosUsuario.ciudad)
switch (ciudad) {
  case "Vitoria-Gasteiz": 
  return 1;
  case "Albacete": 
  return 2;
  case "Alicante": 
  return 3;
  case "Almería": 
  return 4;
  case "Ávila": 
  return 5;
  case "Badajoz": 
  return 6;
  case "Palma de Mallorca": 
  return 7;
  case "Barcelona": 
  return 8;
  case "Burgos": 
  return 9;
  case "Cáceres": 
  return 10;
  case "Cádiz": 
  return 11;
  case "Castellón": 
  return 12;
  case "Ciudad Real": 
  return 13;
  case "Córdoba": 
  return 14;
  case "Coruña": 
  return 15;
  case "Cuenca": 
  return 16;
  case "Girona": 
  return 17;
  case "Granada": 
  return 18;
  case "Guadalajara": 
  return 19;
  case "San Sebastián": 
  return 20;
  case "Huelva": 
  return 21;
  case "Huesca": 
  return 22;
  case "Jaén": 
  return 23;
  case "León": 
  return 24;
  case "Lleida": 
  return 25;
  case "Logroño": 
  return 26;
  case "Lugo": 
  return 27;
  case "Madrid": 
  return 28;
  case "Málaga": 
  return 29;
  case "Murcia": 
  return 30;
  case "Pamplona": 
  return 31;
  case "Ourense": 
  return 32;
  case "Oviedo": 
  return 33;
  case "Palencia": 
  return 34;
  case "Las Palmas de Gran Canaria": 
  return 35;
  case "Pontevedra": 
  return 36;
  case "Salamanca": 
  return 37;
  case "Santa Cruz de Tenerife": 
  return 38;
  case "Santander": 
  return 39;
  case "Segovia": 
  return 40;
  case "Sevilla": 
  return 41;
  case "Soria": 
  return 42;
  case "Tarragona": 
  return 43;
  case "Teruel": 
  return 44;
  case "Toledo": 
  return 45;
  case "Valencia": 
  return 46;
  case "Valladolid": 
  return 47;
  case "Bilbao": 
  return 48;
  case "Zamora": 
  return 49;
  case "Zaragoza": 
  return 50;
  case "Ceuta": 
  return 51;
  case "Melilla": 
  return 52
  default:
  return 0
  
}
 }


}
