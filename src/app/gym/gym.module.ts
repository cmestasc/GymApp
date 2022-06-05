import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { MusculoTarjetaComponent } from './components/musculo-tarjeta/musculo-tarjeta.component';
import { RouterModule } from '@angular/router';
import { GymRoutingModule } from './gym-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MusculoComponent } from './pages/musculo/musculo.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EjercicioTarjetaComponent } from './components/ejercicio-tarjeta/ejercicio-tarjeta.component';


@NgModule({
  declarations: [
    HomeComponent,
    EjerciciosComponent,
    TarjetaComponent,
    MusculoTarjetaComponent,
    MusculoComponent,
    ListadoComponent,
    EjercicioTarjetaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    GymRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    
  ]
})
export class GymModule { }
