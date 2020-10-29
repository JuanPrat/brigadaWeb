import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBrigadistaComponent } from './agregar-brigadista.component';

describe('AgregarBrigadistaComponent', () => {
  let component: AgregarBrigadistaComponent;
  let fixture: ComponentFixture<AgregarBrigadistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarBrigadistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarBrigadistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
