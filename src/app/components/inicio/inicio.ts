import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit{

  displayedText: String = '';

  private texts:String[]=["Sergio Villa Estevez","Desarrollador Multiplataforma", "Frontend & Backend"]
  private currentIndexText : number = 0;
  private charIndex: number = 0;
  private deleting : boolean = false;




ngOnInit(): void {
    this.startTyping();
    this.initStars();


}
private initStars() {
  const canvas = document.getElementById('stars') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars: { x: number, y: number, r: number }[] = [];
  const numStars = 150;

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2
    });
  }

  function draw() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    ctx!.fillStyle = '#00fff7';
    stars.forEach(star => {
      ctx!.beginPath();
      ctx!.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx!.fill();
    });
  }

  function animate() {
    stars.forEach(star => {
      star.y += 0.2;
      if (star.y > canvas.height) star.y = 0;
    });
    draw();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}



  private startTyping() {
      const currentText = this.texts[this.currentIndexText];

      if(!this.deleting){
        this.displayedText = currentText.slice(0,this.charIndex+1);
        this.charIndex++;
        if(this.charIndex === currentText.length){
          this.deleting= true;
          setTimeout(()=> this.startTyping(), 1500);
          return;
        } 
      } else{
        this.displayedText = currentText.slice(0, this.charIndex -1);
        this.charIndex--;
        if(this.charIndex === 0){
          this.deleting=false;
          this.currentIndexText = (this.currentIndexText + 1) % this.texts.length;
        }
      }
      setTimeout(()=>this.startTyping(),this.deleting?50: 150);
  }

  


}
