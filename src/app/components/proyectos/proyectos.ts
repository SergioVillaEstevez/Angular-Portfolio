import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  proyectos = [

    {
      nombre: 'NeiverHub',
      descripcion: 'Aplicación Android desarrollada con Android Studio y Kotlin. Gestión de foros y comunidades.',
      tecnologias: ['Android Studio', 'Kotlin'],
      icon: 'assets/icons/android.svg',
      enlace: 'https://github.com/SergioVillaEstevez/AppNeiver',
      img:['assets/neiverhub_sesion.png','assets/neiverhub_inicio.png', 'assets/neiverhub_principal.png', 'assets/neiverhub_lista.png'],
      mostrar: false
    }, 
    {
      nombre: 'App de Pádel',
      descripcion: 'App multiplataforma en React Native para gestionar ligas y jugadores de pádel.',
      tecnologias: ['React Native'],
      icon: 'assets/icons/react.png',
      enlace: 'https://github.com/SergioVillaEstevez/AppPadel',
      img:['assets/padel_sesion.png','assets/padel_inicio.png', 'assets/padel_menu.png']
    },
  
    {
      nombre: 'Iko Adventure',
      descripcion: 'Juego en C# con Unity, incluyendo mecánicas de aventura y exploración.',
      tecnologias: ['C#', 'Unity'],
      icon: 'assets/icons/unity.svg',
      enlace: '',
      img:['assets/ikoadventure_inicio.png','assets/ikoadventure_disparando.png', 'assets/ikoadventure_corriendo.png']
    },
      {
      nombre: 'API REST',
      descripcion: 'API REST desarrollada en Java con Spring Boot. Backend sólido y escalable.',
      tecnologias: ['Java', 'Spring Boot'],
      icon: 'assets/icons/spring.svg',
      enlace: 'https://github.com/SergioVillaEstevez/ReservaEventos',
      img:[]
    },
  ];


  selectedImage: string | null = null;

abrirImagen(img: string) {
  this.selectedImage = img;
}

cerrarImagen() {
  this.selectedImage = null;
}

mostrarModal = false;
imagenes: string[] = [];
indiceActual = 0;

abrirModal(imgs: string[], index: number) {
  this.imagenes = imgs;
  this.indiceActual = index;
  this.mostrarModal = true;
}

cerrarModal() {
  this.mostrarModal = false;
}

nextImagen() {
  this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
}

prevImagen() {
  this.indiceActual =
    (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
}

}
