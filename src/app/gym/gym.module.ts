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
import { AdminComponent } from './pages/admin/admin.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { EditarComponent } from './pages/editar/editar.component';
import { AddEjercicioComponent } from './pages/add-ejercicio/add-ejercicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaEjerciciosComponent } from './components/lista-ejercicios/lista-ejercicios.component';
import { SafePipePipe } from './pipes/safe-pipe.pipe';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component';
import { TablaEjerciciosComponent } from './components/tabla-ejercicios/tabla-ejercicios.component';
import { ListaProgramasComponent } from './components/lista-programas/lista-programas.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { ConfirmarEjercicioComponent } from './components/confirmar-ejercicio/confirmar-ejercicio.component';


@NgModule({
  declarations: [
    HomeComponent,
    EjerciciosComponent,
    TarjetaComponent,
    MusculoTarjetaComponent,
    MusculoComponent,
    ListadoComponent,
    EjercicioTarjetaComponent,
    AdminComponent,
    TablaComponent,
    AcordeonComponent,
    EditarComponent,
    AddEjercicioComponent,
    ListaEjerciciosComponent,
    SafePipePipe,
    PrincipalComponent,
    RutinasComponent,
    TablaEjerciciosComponent,
    ListaProgramasComponent,
    EditarUsuarioComponent,
    ConfirmarComponent,
    ConfirmarEjercicioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    GymRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class GymModule { }
