import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterOutlet } from "@angular/router";
 
@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [NgClass, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  
}

}
