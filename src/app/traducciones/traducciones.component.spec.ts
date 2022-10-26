import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraduccionesComponent } from './traducciones.component';

describe('TraduccionesComponent', () => {
  let component: TraduccionesComponent;
  let fixture: ComponentFixture<TraduccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraduccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});