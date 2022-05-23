import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { MusculoTarjetaComponent } from './components/musculo-tarjeta/musculo-tarjeta.component';
import { RouterModule } from '@angular/router';
import { GymRoutingModule } from './gym-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    EjerciciosComponent,
    MusculoTarjetaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    GymRoutingModule
  ],
  exports: [
    
  ]
})
export class GymModule { }
