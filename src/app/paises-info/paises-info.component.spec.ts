import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesInfoComponent } from './paises-info.component';

describe('PaisesInfoComponent', () => {
  let component: PaisesInfoComponent;
  let fixture: ComponentFixture<PaisesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
