import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInsertarPersonaComponent } from './formulario-insertar-persona.component';

describe('FormularioInsertarPersonaComponent', () => {
  let component: FormularioInsertarPersonaComponent;
  let fixture: ComponentFixture<FormularioInsertarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInsertarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInsertarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
