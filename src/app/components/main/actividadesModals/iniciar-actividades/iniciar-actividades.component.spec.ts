import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarActividadesComponent } from './iniciar-actividades.component';

describe('IniciarActividadesComponent', () => {
  let component: IniciarActividadesComponent;
  let fixture: ComponentFixture<IniciarActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
