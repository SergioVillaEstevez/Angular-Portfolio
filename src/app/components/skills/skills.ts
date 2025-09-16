import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills = [
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 85, proyectos:"Apis Rest", years: 1},
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 55, proyectos:"Web", years: 1 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 75, proyectos:"Web", years: 1 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',level: 85 , proyectos:"Apis Rest", years: 1 },
];

lenguages = [
  { name: 'Java', icon: 'https://img.icons8.com/color/512/java-coffee-cup-logo.png',framework:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 85, proyectos:"Apis Rest con Spring Boot", years: 1 },
  { name: 'TypeScript', icon: 'https://img.icons8.com/color/512/typescript.png',framework:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 70, proyectos:'Paginas Web Angular', years:1 },
  { name: 'C#', icon: 'https://img.icons8.com/color/512/c-sharp-logo.png',framework:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Unity_Technologies_logo.svg', level: 60, proyectos:'Videojuego 2D', years:1  },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/512/javascript.png',framework:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 70, proyectos:'Web React', years:1  },
  { name: 'Kotlin', icon: 'https://img.icons8.com/color/512/kotlin.png',framework:'https://upload.wikimedia.org/wikipedia/commons/0/0e/Android_Studio_Icon_3.6.svg', level: 70, proyectos:'App Android', years:1  },
];


}
