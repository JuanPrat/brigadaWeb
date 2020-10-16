import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarModalComponent } from './programar-modal.component';

describe('ProgramarModalComponent', () => {
  let component: ProgramarModalComponent;
  let fixture: ComponentFixture<ProgramarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
