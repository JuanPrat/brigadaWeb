import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteKitComponent } from './reporte-kit.component';

describe('ReporteKitComponent', () => {
  let component: ReporteKitComponent;
  let fixture: ComponentFixture<ReporteKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
