import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills = [
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 85 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',level: 85  },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 85 }
];

lenguages = [
  { name: 'Java', icon: 'https://img.icons8.com/color/512/java-coffee-cup-logo.png', level: 50 },
  { name: 'TypeScript', icon: 'https://img.icons8.com/color/512/typescript.png', level: 50 },
  { name: 'C#', icon: 'https://img.icons8.com/color/512/c-sharp-logo.png', level: 50 },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/512/javascript.png', level: 50 },
  { name: 'Kotlin', icon: 'https://img.icons8.com/color/512/kotlin.png', level: 50 },
];


}
