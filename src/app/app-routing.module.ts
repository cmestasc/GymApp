import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosComponent } from './gym/pages/ejercicios/ejercicios.component';
import { HomeComponent } from './gym/pages/home/home.component';

const routes: Routes = [
  {
    path: 'gymApp',
    loadChildren: () => import ('./gym/gym.module').then(m => m.GymModule)
  },
  {
    path: '**',
    redirectTo: 'gymApp'
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
