import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/access/access.component').then(
        (x) => x.AccessComponent,
      );
    },
  },
  {
    path: 'registrar',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/register/register.component').then(
        (x) => x.RegisterComponent,
      );
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
