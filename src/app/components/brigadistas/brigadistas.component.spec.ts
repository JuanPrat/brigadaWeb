import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadistasComponent } from './brigadistas.component';

describe('BrigadistasComponent', () => {
  let component: BrigadistasComponent;
  let fixture: ComponentFixture<BrigadistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrigadistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
