import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Sobremi } from './components/sobremi/sobremi';
import { Proyectos } from './components/proyectos/proyectos';
import { Skills } from './components/skills/skills';
import { Contacto } from './components/contacto/contacto';
import { Inicio } from "./components/inicio/inicio";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-portfolio');
}
