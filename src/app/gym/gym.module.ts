import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';



@NgModule({
  declarations: [
    HomeComponent,
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    
  ]
})
export class GymModule { }
