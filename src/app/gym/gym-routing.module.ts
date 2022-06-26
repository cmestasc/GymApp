import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { MusculoComponent } from './pages/musculo/musculo.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditarComponent } from './pages/editar/editar.component';
import { AddEjercicioComponent } from './pages/add-ejercicio/add-ejercicio.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'editar/:id',
            component: EditarComponent
          }
        ]
      },
      {
        path: 'ejercicios',
        component: EjerciciosComponent,
        children : [
          {
            path: 'admin',
            component: AdminComponent
          },
          {
            path: 'addEjercicio',
            component: AddEjercicioComponent
          },
          {
            path: 'listado',
            component: ListadoComponent,
          },
          {
            path: ':musculo',
            component: MusculoComponent,
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'ejercicios'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GymRoutingModule { }
