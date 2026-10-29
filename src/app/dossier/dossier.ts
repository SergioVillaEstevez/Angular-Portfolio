import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter, Subscription } from 'rxjs';
import { Corte, dossier, etiquetaAnos, secciones } from '../data/dossier';

@Component({
  selector: 'app-dossier',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './dossier.html',
})
export class Dossier implements OnInit, OnDestroy {
  readonly data = dossier;
  readonly indice = [
    { id: 'identidad', n: '01', label: 'Identidad' },
    { id: 'obra', n: '02', label: 'Obra' },
    { id: 'oficio', n: '03', label: 'Oficio' },
    { id: 'contacto', n: '04', label: 'Contacto' },
  ] as const;

  readonly menuOpen = signal(false);
  readonly obraAbierta = signal<string | null>(null);
  readonly tuboAbierto = signal<string | null>(null);
  readonly foto = signal<{ cortes: Corte[]; index: number } | null>(null);
  readonly enviado = signal(false);
  readonly retro = signal(false);
  readonly turning = signal(false);

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private sub?: Subscription;
  private scrollTimer = 0;
  private flipTimer = 0;
  private scrollGuard = 0;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    hp: [''],
  });

  ngOnInit(): void {
    this.sub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.seguir());
    this.seguir();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    window.clearTimeout(this.scrollTimer);
    window.clearTimeout(this.flipTimer);
    document.body.style.overflow = '';
    document.body.classList.remove('is-tube');
    this.tema(false);
  }

  private seguir(): void {
    const section = this.router.url.split(/[?#]/)[0].replace(/^\//, '');
    if (section && !secciones.includes(section as (typeof secciones)[number])) {
      void this.router.navigateByUrl('/', { replaceUrl: true });
      return;
    }
    this.menuOpen.set(false);
    window.clearTimeout(this.scrollTimer);
    this.scrollTimer = window.setTimeout(() => this.ir(section), 0);
  }

  anos(valor: number): string {
    return etiquetaAnos(valor);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  voltear(): void {
    const next = !this.retro();
    window.clearTimeout(this.flipTimer);
    if (next) {
      this.cerrarFoto();
      this.menuOpen.set(false);
      this.scrollGuard = window.scrollY;
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    this.turning.set(true);
    document.body.classList.add('is-tube');
    document.body.style.overflow = 'hidden';
    this.tema(true);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const espera = reduce ? 0 : 40;
    window.setTimeout(() => this.retro.set(next), espera);
    this.flipTimer = window.setTimeout(() => {
      this.turning.set(false);
      if (!this.retro()) {
        document.body.classList.remove('is-tube');
        this.tema(false);
        document.body.style.overflow = this.foto() ? 'hidden' : '';
        const y = this.scrollGuard;
        window.setTimeout(() => window.scrollTo({ top: y, behavior: 'auto' }), 0);
      }
    }, reduce ? 50 : 1000);
  }

  private tema(tubo: boolean): void {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', tubo ? '#100e0a' : '#efece4');
  }

  toggleTubo(id: string): void {
    this.tuboAbierto.update((actual) => (actual === id ? null : id));
  }

  toggleObra(id: string): void {
    this.obraAbierta.update((actual) => (actual === id ? null : id));
  }

  abrirFoto(cortes: Corte[], index: number): void {
    this.foto.set({ cortes, index });
    document.body.style.overflow = 'hidden';
  }

  cerrarFoto(): void {
    this.foto.set(null);
    document.body.style.overflow = this.retro() || this.turning() ? 'hidden' : '';
  }

  moverFoto(direccion: number): void {
    const actual = this.foto();
    if (!actual) return;
    const total = actual.cortes.length;
    const index = (actual.index + direccion + total) % total;
    this.foto.set({ cortes: actual.cortes, index });
  }

  enviar(): void {
    this.enviado.set(false);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.controls.hp.value) return;

    const { name, email, subject, message } = this.form.getRawValue();
    const body = encodeURIComponent(`${message}\n\n—\n${name} <${email}>`);
    window.location.href = `mailto:${dossier.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    this.enviado.set(true);
  }

  @HostListener('document:keydown', ['$event'])
  tecla(event: KeyboardEvent): void {
    if (this.foto()) {
      if (event.key === 'Escape') this.cerrarFoto();
      if (event.key === 'ArrowRight') this.moverFoto(1);
      if (event.key === 'ArrowLeft') this.moverFoto(-1);
      return;
    }
    if (event.key === 'Escape' && this.retro()) this.voltear();
  }

  private ir(section: string | null): void {
    const go = () => {
      if (this.retro() || this.turning()) return;
      const actual = this.router.url.split(/[?#]/)[0].replace(/^\//, '');
      if (actual !== (section ?? '')) return;
      const target = section ? document.getElementById(section) : null;
      if (!target) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }
      const header = document.querySelector('.index')?.getBoundingClientRect().height ?? 58;
      const top = target.getBoundingClientRect().top + window.scrollY - header;
      window.scrollTo({ top, behavior: 'auto' });
    };
    go();
    void document.fonts?.ready.then(go);
  }
}
