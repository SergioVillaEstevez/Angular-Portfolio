import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobremi } from './components/sobremi/sobremi';
import { Proyectos } from './components/proyectos/proyectos';
import { Skills } from './components/skills/skills';
import { Contacto } from './components/contacto/contacto';
import { Inicio } from './components/inicio/inicio';

export const routes: Routes = [
    {path: 'sobremi', component: Sobremi},
    {path: 'proyectos', component: Proyectos},
    {path: 'skills', component: Skills},
    {path: 'contacto', component: Contacto},
    {path: '', component: Inicio},
    {path: 'inicio', component: Inicio},

];
