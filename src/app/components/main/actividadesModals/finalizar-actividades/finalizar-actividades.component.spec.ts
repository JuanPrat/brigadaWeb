import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarActividadesComponent } from './finalizar-actividades.component';

describe('FinalizarActividadesComponent', () => {
  let component: FinalizarActividadesComponent;
  let fixture: ComponentFixture<FinalizarActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
