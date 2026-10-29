import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Dossier } from './dossier';
import { routes } from '../app.routes';

describe('Dossier', () => {
  let fixture: ComponentFixture<Dossier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dossier],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Dossier);
    fixture.detectChanges();
  });

  it('hides the image control when a piece has no captures', () => {
    const api = fixture.nativeElement.querySelector('#api, .work:last-child') as HTMLElement;
    const buttons = [...fixture.nativeElement.querySelectorAll('.work')].at(-1) as HTMLElement;
    expect(buttons.textContent).toContain('API REST');
    expect(buttons.textContent).toContain('Código');
    expect(buttons.textContent).not.toContain('Corte');
    expect(api).toBeTruthy();
  });

  it('shows validation when the form is empty', () => {
    const button = fixture.nativeElement.querySelector('.send') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    const errors = fixture.nativeElement.querySelectorAll('.error');
    expect(errors.length).toBe(4);
  });
});
