import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'alumno',
    loadComponent: () => import('./alumno/alumno.page').then( m => m.AlumnoPage)
  },
  {
    path: 'alumno/:id',
    loadComponent: () => import('./alumno/alumno.page').then( m => m.AlumnoPage)
  },
  {
    path: 'profesor',
    loadComponent: () => import('./profesor/profesor.page').then( m => m.ProfesorPage)
  },
  {
    path: 'recuperar',
    loadComponent: () => import('./recuperar/recuperar.page').then( m => m.RecuperarPage)
  },

];
