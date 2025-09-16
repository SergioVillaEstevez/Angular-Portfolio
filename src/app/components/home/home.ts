import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterOutlet,RouterLink } from "@angular/router";
 
@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [NgClass, RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  
}

}
