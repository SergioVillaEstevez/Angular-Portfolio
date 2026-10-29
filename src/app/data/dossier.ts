export interface Corte {
  src: string;
  alt: string;
}

export interface Obra {
  id: string;
  indice: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  enlace: string | null;
  imagenes: Corte[];
}

export interface Oficio {
  nombre: string;
  nivel: number;
  uso: string;
  anos: number;
}

export interface Experiencia {
  puesto: string;
  empresa: string;
  fecha: string;
  lugar: string;
  tareas: string[];
  aptitudes: string[];
}

export const secciones = ['identidad', 'obra', 'oficio', 'contacto'] as const;
export type Seccion = (typeof secciones)[number];

export const dossier = {
  nombre: 'Sergio Villa Estévez',
  rol: 'Desarrollador multiplataforma',
  ciudad: 'Madrid',
  email: 'sergiovillaestevez@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sergio-villa-est%C3%A9vez/',
  github: 'https://github.com/SergioVillaEstevez',
  foto: 'assets/foto.jpg',
  fotoPixel: 'assets/sergio-pixel.png',
  frase: 'Software para el móvil, el navegador y el servidor.',
  manifiesto:
    'Construyo aplicaciones que tienen que funcionar fuera del prototipo. Angular, React, Node.js, Java y Spring Boot son las herramientas con las que cierro el ciclo: interfaz, lógica y datos.',
  materiales: ['Angular', 'React', 'Node.js', 'Java', 'Spring Boot', 'Kotlin', 'C#', 'Unity'],
  experiencia: [
    {
      puesto: 'Node.js Developer — AI Data Analyst',
      empresa: 're-inventa',
      fecha: 'may. 2025 — sept. 2025 · 5 meses · prácticas',
      lugar: 'Madrid · en remoto',
      tareas: [
        'Utilidades en Node.js para generar y transformar archivos de datos usados en la validación y el entrenamiento de modelos.',
        'Prompts para modelos de lenguaje, enfocados en detectar respuestas afirmativas y negativas en conversaciones transcritas.',
        'Métricas de falsos positivos, falsos negativos y precisión con scripts en RStudio.',
        'Lectura de resultados con el equipo técnico para ajustar los modelos según la calidad de las predicciones.',
      ],
      aptitudes: ['R', 'Node.js', 'JavaScript'],
    },
    {
      puesto: 'Empleado de telemarketing',
      empresa: 'Intelcia Spain & Latam',
      fecha: 'nov. 2021 — feb. 2022 · 4 meses',
      lugar: 'España',
      tareas: [
        'Bases de datos de clientes y precisión de la información en el CRM.',
        'Seguimiento y procesamiento de clientes, buscando dónde el flujo perdía tiempo.',
        'Uso del CRM como la capa que sostiene lo que ve la persona al otro lado.',
      ],
      aptitudes: ['CRM', 'Datos', 'Procesos'],
    },
  ] satisfies Experiencia[],
  obra: [
    {
      id: 'neiverhub',
      indice: '01',
      nombre: 'NeiverHub',
      descripcion: 'Aplicación Android en Kotlin. Foros y comunidades.',
      tecnologias: ['Kotlin', 'Android Studio'],
      enlace: 'https://github.com/SergioVillaEstevez/AppNeiver',
      imagenes: [
        { src: 'assets/neiverhub_sesion.png', alt: 'Pantalla de inicio de sesión de NeiverHub' },
        { src: 'assets/neiverhub_inicio.png', alt: 'Pantalla de inicio de NeiverHub' },
        { src: 'assets/neiverhub_principal.png', alt: 'Pantalla principal de NeiverHub' },
        { src: 'assets/neiverhub_lista.png', alt: 'Listado de NeiverHub' },
      ],
    },
    {
      id: 'padel',
      indice: '02',
      nombre: 'Pádel',
      descripcion: 'App en React Native para ligas y jugadores de pádel.',
      tecnologias: ['React Native'],
      enlace: 'https://github.com/SergioVillaEstevez/AppPadel',
      imagenes: [
        { src: 'assets/padel_sesion.png', alt: 'Inicio de sesión de la app de pádel' },
        { src: 'assets/padel_inicio.png', alt: 'Inicio de la app de pádel' },
        { src: 'assets/padel_menu.png', alt: 'Menú de la app de pádel' },
      ],
    },
    {
      id: 'iko',
      indice: '03',
      nombre: 'Iko Adventure',
      descripcion: 'Juego en C# y Unity. Aventura y exploración.',
      tecnologias: ['C#', 'Unity'],
      enlace: null,
      imagenes: [
        { src: 'assets/ikoadventure_inicio.png', alt: 'Pantalla de inicio de Iko Adventure' },
        { src: 'assets/ikoadventure_disparando.png', alt: 'Personaje disparando en Iko Adventure' },
        { src: 'assets/ikoadventure_corriendo.png', alt: 'Personaje corriendo en Iko Adventure' },
      ],
    },
    {
      id: 'api',
      indice: '04',
      nombre: 'API REST',
      descripcion: 'API en Java con Spring Boot.',
      tecnologias: ['Java', 'Spring Boot'],
      enlace: 'https://github.com/SergioVillaEstevez/ReservaEventos',
      imagenes: [],
    },
  ] satisfies Obra[],
  oficio: [
    { nombre: 'Java', nivel: 85, uso: 'APIs con Spring Boot', anos: 1 },
    { nombre: 'TypeScript', nivel: 70, uso: 'Web con Angular', anos: 1 },
    { nombre: 'JavaScript', nivel: 70, uso: 'Web con React', anos: 1 },
    { nombre: 'Kotlin', nivel: 70, uso: 'App Android', anos: 1 },
    { nombre: 'C#', nivel: 60, uso: 'Videojuego 2D', anos: 1 },
    { nombre: 'Node.js', nivel: 85, uso: 'Utilidades y APIs', anos: 1 },
    { nombre: 'Angular', nivel: 55, uso: 'Este portfolio y webs', anos: 1 },
    { nombre: 'React', nivel: 75, uso: 'Interfaces web', anos: 1 },
  ] satisfies Oficio[],
};

export function etiquetaAnos(anos: number): string {
  return anos === 1 ? '1 año' : `${anos} años`;
}
