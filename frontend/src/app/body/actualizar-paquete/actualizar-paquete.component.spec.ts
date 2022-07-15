import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPaqueteComponent } from './actualizar-paquete.component';

describe('ActualizarPaqueteComponent', () => {
  let component: ActualizarPaqueteComponent;
  let fixture: ComponentFixture<ActualizarPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPaqueteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
