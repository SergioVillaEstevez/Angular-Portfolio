import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobremi',
  imports: [RouterLink],
  templateUrl: './sobremi.html',
  styleUrl: './sobremi.css'
})
export class Sobremi {
  foto: String = 'assets/foto.jpg';
  experiencia = [
  {
    puesto: 'Node.js Developer – AI Data Analyst (Prácticas)',
    empresa: 're-inventa',
    fecha: 'may. 2025 - sept. 2025',
    duracion: '5 meses',
    ubicacion: 'Madrid, Comunidad de Madrid, España · En remoto',
    responsabilidades: [
      'Desarrollo de utilidades con Node.js para generar y transformar archivos de datos utilizados en la validación y entrenamiento de modelos.',
      'Diseño y optimización de prompts para modelos de lenguaje (LLM) enfocados en la detección de respuestas afirmativas y negativas en conversaciones transcritas.',
      'Extracción y procesamiento de métricas (falsos positivos, falsos negativos, precisión general) mediante scripts en R-Studio.',
      'Análisis de resultados y colaboración directa con el equipo técnico para ajustar los modelos según la calidad de las predicciones.'
    ],
    aptitudes: ['R', 'Node.js', 'JavaScript']
  },
  {
    puesto: 'Empleado de telemarketing',
    empresa: 'Intelcia Spain & Latam',
    fecha: 'nov. 2021 - feb. 2022',
    duracion: '4 meses',
    ubicacion: 'España',
    responsabilidades: [
      'Manejo de bases de datos: trabajé con grandes volúmenes de datos de clientes, asegurando su precisión en sistemas CRM.',
      'Optimización de procesos: identifiqué oportunidades para mejorar la eficiencia en el seguimiento y procesamiento de clientes.',
      'Interacción con sistemas CRM: colaboré con sistemas de gestión de relaciones con clientes, comprendiendo cómo la infraestructura backend soporta la experiencia del usuario final.'
    ],
    aptitudes: ['CRM', 'Gestión de datos', 'Procesos']
  }
];

}
