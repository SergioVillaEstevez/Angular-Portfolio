import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {
  contactForm: FormGroup;
  sending = false;
  successMessage = '';
  errorMessage = '';

  // CONFIGURA ESTO:
  contactEmail = 'sergiovillaestevez@gmail.com'; // <-- pon aquí tu email para fallback mailto
  apiUrl = ''; // si tienes un endpoint para enviar mensajes (POST), pon la URL aquí

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      hp: [''] // honeypot (campo oculto) para bots
    });
  }

  get f() { return this.contactForm.controls; }

  send(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.sending) return;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Honeypot: si está rellenado, seguramente es un bot
    if (this.contactForm.value.hp) {
      // no respondemos, silently ignore
      return;
    }

    const payload = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      subject: this.f['subject'].value,
      message: this.f['message'].value
    };

    if (this.apiUrl) {
      // Intentar enviar al backend si está configurado
      this.sending = true;
      this.http.post(this.apiUrl, payload).subscribe({
        next: () => {
          this.successMessage = 'Mensaje enviado. Gracias — te responderé pronto.';
          this.contactForm.reset();
          this.sending = false;
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Error al enviar. Se ha intentado el envío por el servidor.';
          this.sending = false;
        }
      });
    } else {
      // Fallback: abrir cliente mailto
      const subject = encodeURIComponent(payload.subject);
      const body = encodeURIComponent(`${payload.message}\n\n---\nDe: ${payload.name} <${payload.email}>`);
      const mailto = `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
      // abrir mailto
      window.location.href = mailto;
      this.successMessage = 'Se ha abierto tu cliente de correo. Si no se abre, copia el mensaje manualmente.';
      // no limpiamos el form para que el usuario pueda copiar si hace falta
    }
  }
}
