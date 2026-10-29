import { Routes } from '@angular/router';
import { Dossier } from './dossier/dossier';

export const routes: Routes = [
  { path: 'sobremi', redirectTo: 'identidad', pathMatch: 'full' },
  { path: 'proyectos', redirectTo: 'obra', pathMatch: 'full' },
  { path: 'skills', redirectTo: 'oficio', pathMatch: 'full' },
  { path: 'inicio', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Dossier },
  { path: ':section', component: Dossier },
];
