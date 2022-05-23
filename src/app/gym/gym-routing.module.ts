import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'ejercicios',
        component: EjerciciosComponent
      },
      {
        path: '**',
        redirectTo: 'ejercicios'
      },
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
